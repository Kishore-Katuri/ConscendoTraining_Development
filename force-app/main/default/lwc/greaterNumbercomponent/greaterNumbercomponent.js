import { LightningElement } from 'lwc';

export default class GreaterNumbercomponent extends LightningElement {
    fNumber;
    sNumber;
    tNumber;


    handleFirst(event){
        this.fNumber=event.target.value;
    };
    handleSecond(event){
        this.sNumber=event.target.value;
    };
    handleThird(event){
        this.tNumber=event.target.value;
    };
    handleCalculate(event){
        const a=parseInt(this.fNumber);
        const b=parseInt(this.sNumber);
        const c=parseInt(this.tNumber);

        if(a>b && a>c){
            alert('The Greater Number is'+a);
        }
        else if(b>a && b>c){
            alert('The Greater Number is'+b);
        }
        else{
            alert('The Greater Number is'+c);
        }

    };
    handleClear(event){
        this.fNumber="";
        this.sNumber="";
        this.tNumber="";
    };
    
}