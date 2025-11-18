import { LightningElement } from 'lwc';

import {createRecord} from 'lightning/uiRecordApi';

import CONTACTOBJ from '@salesforce/schema/Contact';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Description from '@salesforce/schema/Contact.Description';

export default class Create_record_without_apex_lwc_contact extends LightningElement {
    frtnm;
    lstnm;
    eml;
    phn;
    des;

    handleFirst(event)
    {
        this.frtnm=event.target.value;
    }
    handleLast(event)
    {
        this.lstnm=event.target.value;
    }
    handleEmail(event)
    {
        this.eml=event.target.value;
    }
    handlePhone(event)
    {
        this.phn=event.target.value;
    }
    handleDes(event)
    {
        this.des=event.target.value;
    }
    handleSave(event)
    {
        //step-1: create field Mapping
        const fields={
                      FirstName : this.frtnm,
                      LastName : this.lstnm,
                      Email : this.eml,
                      Phone : this.phn,
                      Description : this.des
        };
        // step-2:create Record mapping

        const recordInput={apiName : CONTACTOBJ.objectApiName, fields};

        // step-3:call the imperation

        createRecord(recordInput).then(result=>{
            alert('Contact Created Successfully'+result.id);
        }).catch(error=>{
            alert('error'+error);
        });
    }
}