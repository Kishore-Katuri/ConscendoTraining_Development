import { LightningElement } from 'lwc';

export default class Parent_lwc_programatic_example extends LightningElement {
    msgtodisplay;
    constructor()
    {
        super();
        this.template.addEventListener('evtsubmit',this.SayHi.bind(this));
        this.template.addEventListener('evtbye',this.SayBye.bind(this));
    }
    SayHi(event)
    {
        this.msgtodisplay=event.detail;
        alert('Hi Good morning message is from parent LWC data pass from child');
    }
    SayBye(event)
    {
        this.msgtodisplay=event.detail;
        alert('Bye good night message');
    }
}