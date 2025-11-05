import { LightningElement } from 'lwc';
export default class Employee_lwc_component extends LightningElement {
Name='Surya';
Age='56';
empCode='23456';
empDetails={
    phone:234567,
    state:'Andhra Pradesh',
    city:'Guntur',
    country:'India'
};
handlesubmit(event){
    this.Name='Manvitha';
    this.Age=24;
    this.empCode=4658759;
};

}