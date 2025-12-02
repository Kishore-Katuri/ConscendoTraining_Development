import { LightningElement } from 'lwc';

export default class Child_lwc_programatic_example extends LightningElement {
    msg;
    handlesubmit(event)
    {
        this.dispatchEvent(new CustomEvent('evtsubmit',{detail:this.msg, bubbles:true, composed:true}));
    }
    handlebye(event)
    {
        this.dispatchEvent(new CustomEvent('evtbye',{detail:this.msg, bubbles:true, composed:true}));
    }
    handlemsg(event)
    {
        this.msg=event.target.value;
    }
}