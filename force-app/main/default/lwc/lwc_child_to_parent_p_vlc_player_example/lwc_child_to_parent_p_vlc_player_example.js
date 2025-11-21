import { LightningElement } from 'lwc';

export default class Lwc_child_to_parent_p_vlc_player_example extends LightningElement {
    vol=0;
    label='Awaiting Button Click';

    increasevolume(event)
    {
        if(this.vol>=0 && this.vol<100)
        {
            this.vol=this.vol+1;
        }
        this.label=event.detail;
    }
    decreasevolume(event)
    {
        if(this.vol>0 && this.vol<100)
        {
            this.vol=this.vol-1;
        }
        this.label=event.detail;
    }
}