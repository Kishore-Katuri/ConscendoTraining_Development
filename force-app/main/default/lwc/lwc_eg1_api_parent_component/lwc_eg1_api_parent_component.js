import { LightningElement } from 'lwc';

export default class Lwc_eg1_api_parent_component extends LightningElement {
    f;
    s;
    handlefirst(event){
        this.f=event.target.value;
    }
    handlesecond(event){
        this.s=event.target.value;
    }
}