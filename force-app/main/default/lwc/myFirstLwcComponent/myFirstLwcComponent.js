import { LightningElement } from 'lwc';

export default class MyFirstLwcComponent extends LightningElement {
    name='Virat Kohli';
    handleSubmit(event){
        alert('Rohit Sharma is my favourite cricketer');
        this.name='Kishore Katuri';
    }
    handleChange(event)
    {
        this.name=event.target.value;
    }
}