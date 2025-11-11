import { LightningElement, wire } from 'lwc';
import fetchopp from '@salesforce/apex/class_opport_datatable_using_wire_lwc.fetchopp';

const columns = [
    { label: 'Opportunity Name', fieldName: 'Name', type: 'text' },
    { label: 'Close Date', fieldName: 'CloseDate', type: 'date' },
    { label: 'Stage Name', fieldName: 'StageName', type: 'text' },
    { label: 'Description', fieldName: 'Description', type: 'text' }
];

export default class Opp_lwc_wire_method_datatable extends LightningElement {
    columns = columns;

    @wire(fetchopp)
    rupom;
}
