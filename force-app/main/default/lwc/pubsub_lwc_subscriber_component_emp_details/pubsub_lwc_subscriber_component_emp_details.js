import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class Pubsub_lwc_subscriber_component_emp_details extends LightningElement {
    ename;
    emsg;
    ephone;

    connectedCallback()
    {
        this.callllllllmeeeeeeeeee();
    }
    callllllllmeeeeeeeeee()
    {
        pubsub.register('evtempdetails', this.display.bind(this));
    }
    display(response)
    {
        this.ename=response.sender;
        this.emsg=response.message;
        this.ephone=response.phone;
    }
}