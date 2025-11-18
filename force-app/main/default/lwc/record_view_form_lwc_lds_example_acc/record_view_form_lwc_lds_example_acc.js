import { LightningElement} from 'lwc';
import ACCNAME from '@salesforce/schema/Account.Name';
import ACCPHN from '@salesforce/schema/Account.Phone';
import ACCDES from '@salesforce/schema/Account.Description';
import ACCIND from '@salesforce/schema/Account.Industry';
import ACCRAT from '@salesforce/schema/Account.Rating';
import ACCFAX from '@salesforce/schema/Account.Fax';

export default class Record_view_form_lwc_lds_example_acc extends LightningElement {
    recordId = '001J100000WwvaJIAR';
    objname = 'Account';

    Name = ACCNAME;
    Phone = ACCPHN;
    Description = ACCDES;
    Rating = ACCRAT;
    Fax = ACCFAX;
    Industry = ACCIND;

}