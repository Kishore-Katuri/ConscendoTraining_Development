import { LightningElement } from 'lwc';
import VISA_CARD from '@salesforce/resourceUrl/visaCard';
import BANK_LOGO from '@salesforce/resourceUrl/bankLogo';

export default class Lwc_project_task_1_logo extends LightningElement {

    cardImg = VISA_CARD;
    bankImg = BANK_LOGO;
 
    customerNumber = "1234 567 8910 5678";
    accountNumber = "1234 567 8910 5678";
    openDate = "26/04/2023";
    fundingStatus = "Not yet funded";

}

