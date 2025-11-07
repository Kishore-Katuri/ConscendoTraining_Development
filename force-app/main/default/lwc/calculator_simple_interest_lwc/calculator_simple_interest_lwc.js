import { LightningElement } from 'lwc';

export default class Calculator_simple_interest_lwc extends LightningElement {
    p;
    t;
    r;
    si;
    mon_emi;

    handlePrincipal(event){
        this.p=event.target.value;
    }
    handleTenture(event){
        this.t=event.target.value;
    }
    handleInterest(event){
        this.r=event.target.value;
    }
    handleSubmit(event){
        this.si=(this.p*this.t*this.r)/100;
        alert('The simple interest is:'+this.si);
        this.mon_emi=(parseInt(this.p)+parseInt(this.si))/(this.t*12);
        alert('The Monthly EMI is:'+this.mon_emi);
    }
    handleClear(event){
        
    }
}