import { LightningElement, wire } from 'lwc';
import fetchAccounts from '@salesforce/apex/class_account_fetch_lwc_wire.fetchAccounts';

const columns = [
    { label: 'Account Name', fieldName: 'Name', type: 'text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
    { label: 'Rating', fieldName: 'Rating', type: 'text' }
];

export default class Component_account_create_lwc_wire extends LightningElement {
    columns = columns;
    @wire(fetchAccounts) rupom;
}
