import { LightningElement } from 'lwc';

export default class Lwc_child_to_parent_c_control_example extends LightningElement {
    handleincrease(event)
    {
         //step-c/task_1_lwc_example_1
         const inc=new CustomEvent('evtinc',{detail:'volume increase'});

         //step-2:dispatch the event

         this.dispatchEvent(inc);
    }
    handledecrease(event)
    {
         //step-1+step-2
         this.dispatchEvent(new CustomEvent('evtdes',{detail:'volume decrease'}));
    }

}