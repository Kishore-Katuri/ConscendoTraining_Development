import { LightningElement } from 'lwc';

export default class CalculateAreaComponent extends LightningElement {
    length;
    breath;
    result;
    handleLength(event){
        this.length=event.target.value;
    }
    handleBreath(event){
        this.breath=event.target.value;
    }
    handleCalculate(event){
        const l=parseInt(this.length);
        const b=parseInt(this.breath);
        this.result=this.length*this.breath;
    }
}