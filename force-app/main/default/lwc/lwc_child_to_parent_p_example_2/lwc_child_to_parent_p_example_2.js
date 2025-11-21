import { LightningElement} from 'lwc';

export default class Lwc_child_to_parent_p_example_2 extends LightningElement {
    msgchild;

    handlesave(event)
    {
        this.msgchild=event.detail;
    }
}