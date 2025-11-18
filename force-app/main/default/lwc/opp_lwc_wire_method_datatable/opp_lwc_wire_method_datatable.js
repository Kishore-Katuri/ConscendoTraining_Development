import { LightningElement, wire } from 'lwc';
import fetchopp from '@salesforce/apex/class_opport_datatable_using_wire_lwc.fetchopp';

const col = [
    { label: 'Opportunity Name', fieldName: 'Name', type: 'text' },
    { label: 'Close Date', fieldName: 'CloseDate', type: 'date' },
    { label: 'Stage Name', fieldName: 'StageName', type: 'text' },
    { label: 'Description', fieldName: 'Description', type: 'text' }
];

export default class Opp_lwc_wire_method_datatable extends LightningElement {
    columns = col;
    st='';
    mydata;
    myerror;

    handleSearch(event){
        this.st=event.target.value;
    }

    @wire(fetchopp,{stext : '$st'})
    rupom;

    //Using a function
    @wire(fetchopp, {stext : '$st'}) bilal({data,error}){
                                                      if(data)
                                                      {
                                                        this.mydata = data;
                                                      }
                                                      else{
                                                        this.myerror = error;
                                                      }
                                                      };
    

    
}
