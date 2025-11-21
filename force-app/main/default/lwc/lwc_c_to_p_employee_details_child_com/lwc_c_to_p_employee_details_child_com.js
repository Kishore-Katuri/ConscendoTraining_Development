import { LightningElement } from 'lwc';

export default class Lwc_c_to_p_employee_details_child_com extends LightningElement {

    emname;
    emage;
    emsal;
    emrole;
    handleName(event)
    {
        this.emname=event.target.value;
    }
    handleAge(event)
    {
        this.emage=event.target.value;
    }
    handleSalary(event)
    {
        this.emsal=event.target.value;
    }
    handleRole(event)
    {
        this.emrole=event.target.value;
    }
    handleSubmit(event)
    {
         this.dispatchEvent(new CustomEvent('empdetails',{detail:{
                                                                   enme : this.emname,
                                                                   eag : this.emage,
                                                                   esal : this.emsal,
                                                                   erol : this.emrole}
                                                                }));
    }
}