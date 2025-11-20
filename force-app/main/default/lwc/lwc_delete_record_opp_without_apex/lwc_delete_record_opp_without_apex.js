import { LightningElement, api} from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';

export default class Lwc_delete_record_opp_without_apex extends LightningElement {

    @api recordId;
    handledel(event)
    {
        deleteRecord(this.recordId).then(result=>{
            this.dispatchEvent(
                                new ShowToastEvent({
                                    title: 'Success',
                                    message: 'Record deleted successfully',
                                    variant: 'success'
                                })
                            );
        }).catch(error=>{
            this.dispatchEvent(
                                new ShowToastEvent({
                                    title: 'Error deleting record',
                                    message: error.body.message,
                                    variant: 'error'
                                })
                             );
        });
    }
}