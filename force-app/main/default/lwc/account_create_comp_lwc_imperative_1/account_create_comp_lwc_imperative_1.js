import { LightningElement } from 'lwc';
import acccreate from '@salesforce/apex/Account_create_lwc_imperative_1.acccreate';

export default class Account_create_comp_lwc_imperative_1 extends LightningElement {
    aname;
    aphone;
    arating;
    aindustry;

    handleName(event)
    {
        this.aname=event.target.value;
    }
    handlePhone(event)
    {
        this.aphone=event.target.value;
    }
    handleRating(event)
    {
        this.arating=event.target.value;
    }
    handleIndustry(event)
    {
        this.aindustry=event.target.value;
    }
    handleSave(event)
    {
        acccreate({
            'accname':this.aname,
            'accphone':this.aphone,
            'accrating':this.arating,
            'accindustry':this.aindustry
        }).then(result=>{
                           alert(result);
                        }).catch(error=>{
                            alert('The account creation is failed the data is sent from the component to server');
                        });
        
    }
}