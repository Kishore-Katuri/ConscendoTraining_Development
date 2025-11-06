import { LightningElement,api } from 'lwc';

export default class Lwc_eg1_api_child_component extends LightningElement {
    @api num1=12;
    @api num2=23;
    result;
    handleSubmit(event){
        this.result=(parseInt(this.num1)+parseInt(this.num2));
    }

}