import { LightningElement,api,wire} from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import OPPORTUNITY_NAME from '@salesforce/schema/Opportunity.Name';
import OPPORTUNITY_STAGE_NAME from '@salesforce/schema/Opportunity.StageName';
import OPPORTUNITY_AMOUNT from '@salesforce/schema/Opportunity.Amount';
import OPPORTUNITY_CLOSE_DATE from '@salesforce/schema/Opportunity.CloseDate';

export default class Get_record_lwc_imperation_without_apex extends LightningElement {
    @api recordId;

    @wire(getRecord, {recordId : '$recordId', fields : [OPPORTUNITY_NAME, OPPORTUNITY_STAGE_NAME, OPPORTUNITY_AMOUNT, OPPORTUNITY_CLOSE_DATE]})rupom;

    get oppname()
    {
        return getFieldValue(this.rupom.data, OPPORTUNITY_NAME);
    }
    get oppstgname()
    {
        return getFieldValue(this.rupom.data, OPPORTUNITY_STAGE_NAME);
    }
    get oppamount()
    {
        return getFieldValue(this.rupom.data, OPPORTUNITY_AMOUNT);
    }
    get oppclsdate()
    {
        return getFieldValue(this.rupom.data, OPPORTUNITY_CLOSE_DATE);
    }


}