import { LightningElement, track } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityPaginationStandardCtrl.getOpportunities';

export default class CompressedPagination extends LightningElement {

    @track records = [];
    @track pageList = []; // array of page objects: { label, isEllipsis, className, disabled }

    // paging state
    pageNumber = 1;
    pageSize = 5;
    totalRecords = 0;
    totalPages = 0;

    // UI window config
    pageWindowSize = 10; // show up to 5 pages in the middle block

    columns = [
        { label: 'Opportunity Name', fieldName: 'Name', type: 'text' },
        { label: 'Stage', fieldName: 'StageName', type: 'text' },
        { label: 'Amount', fieldName: 'Amount', type: 'currency' },
        { label: 'Close Date', fieldName: 'CloseDate', type: 'date' }
    ];

    connectedCallback() {
        this.loadData();
    }

    loadData() {
        getOpportunities({
            pageSize: this.pageSize,
            pageNumber: this.pageNumber
        })
        .then(result => {
            this.records = result.records || [];
            this.totalRecords = result.totalRecords || 0;
            this.totalPages = Math.ceil(this.totalRecords / this.pageSize) || 0;
            this.generatePageList();
        })
        .catch(error => {
            // eslint-disable-next-line no-console
            console.error('getOpportunities error', error);
            this.records = [];
            this.pageList = [];
            this.totalPages = 0;
            this.totalRecords = 0;
        });
    }

    // Build pageList as objects so template doesn't need expressions or function calls.
    generatePageList() {
        const total = this.totalPages;
        const current = this.pageNumber;
        this.pageList = [];

        if (total <= 6) {
            // show all pages if small
            for (let i = 1; i <= total; i++) {
                this.pageList.push(this._makePageObj(i, false));
            }
            return;
        }

        // always show first page
        this.pageList.push(this._makePageObj(1, false));

        // left ellipsis if needed
        if (current > 4) {
            this.pageList.push(this._makeEllipsis());
        }

        // determine middle block (current-1 .. current+1) but ensure within [2, total-1]
        const start = Math.max(2, current - 1);
        const end = Math.min(total - 1, current + 1);

        for (let i = start; i <= end; i++) {
            // avoid duplicating page 1 or last
            if (i > 1 && i < total) {
                this.pageList.push(this._makePageObj(i, false));
            }
        }

        // right ellipsis if needed
        if (current < total - 3) {
            this.pageList.push(this._makeEllipsis());
        }

        // always show last page
        this.pageList.push(this._makePageObj(total, false));
    }

    // helper to create page object
    _makePageObj(label, isEllipsis) {
        const isActive = (!isEllipsis && label === this.pageNumber);
        return {
            label: label,               // number or string
            isEllipsis: !!isEllipsis,   // boolean
            disabled: !!isEllipsis,     // disable ellipsis
            className: isActive ? 'activePage' : 'pageBtn'
        };
    }

    _makeEllipsis() {
        return {
            label: '…',
            isEllipsis: true,
            disabled: true,
            className: 'pageBtn'
        };
    }

    // click handlers
    handlePageClick(event) {
        const pageLabel = event.currentTarget.dataset.id;
        if (!pageLabel) return;

        if (pageLabel === '…') {
            // do nothing for ellipsis
            return;
        }

        const newPage = Number(pageLabel);
        if (Number.isNaN(newPage) || newPage < 1 || newPage > this.totalPages) return;

        this.pageNumber = newPage;
        this.loadData();
    }

    // optional: methods to go first/last/prev/next if you add buttons later
    goFirst() {
        if (this.pageNumber === 1) return;
        this.pageNumber = 1;
        this.loadData();
    }

    goLast() {
        if (this.pageNumber === this.totalPages) return;
        this.pageNumber = this.totalPages;
        this.loadData();
    }

    goPrev() {
        if (this.pageNumber > 1) {
            this.pageNumber -= 1;
            this.loadData();
        }
    }

    goNext() {
        if (this.pageNumber < this.totalPages) {
            this.pageNumber += 1;
            this.loadData();
        }
    }
}
