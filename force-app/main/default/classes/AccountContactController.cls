public with sharing class AccountContactController {
    public list<AccountContactWrapper> wrapperList {get;set;}
    public AccountContactController() {
        wrapperList=new list<AccountContactWrapper>();
        for(Account a:[select id,name,(select id,name, email from contacts limit 1) from account limit 5]){
            contact relatedcon=(a.contacts.size()>0)?a.contacts[0]:null;
            wrapperList.add(new AccountContactWrapper(a,relatedcon));
        }

    }
}