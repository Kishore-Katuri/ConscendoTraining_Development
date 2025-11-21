import { LightningElement} from 'lwc';

export default class Lwc_child_to_parent_c_example_2 extends LightningElement {
    
    handlemsg;
    handlesave(event)
    {
        this.dispatchEvent(new CustomEvent('evtsave', {detail : this.handlemsg}));
    }
}