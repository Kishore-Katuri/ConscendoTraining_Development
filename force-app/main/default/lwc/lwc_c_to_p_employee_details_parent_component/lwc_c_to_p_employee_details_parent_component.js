import { LightningElement } from 'lwc';

export default class Lwc_c_to_p_employee_details_parent_component extends LightningElement {
    ename;
    eage;
    esal;
    erole;
    displayemp(event)
    {
        this.ename=event.detail.enme;
        this.eage=event.detail.eag;
        this.esal=event.detail.esal;
        this.erole=event.detail.erol;
    }
}