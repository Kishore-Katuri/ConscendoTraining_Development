import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class Pubsub_lwc_emp_details_publisher extends LightningElement {
    name;
    msg;
    handlename(event)
    {
        this.name=event.target.value;
    }
    handlemsg(event)
    {
        this.msg=event.target.value;
    }
    handlesend(event)
    {
        //step-1: compose the message
        let message={
                        'sender' : this.name,
                        'message' : this.msg,
                        'phone'   : '3254365768'
                     };
        //step-2: fire the event with message via pubsub
        pubsub.fire('evtempdetails',message);
    }
}