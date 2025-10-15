public with sharing class AccountContactWrapper {
    public Account acc {get;set;}
    public Contact con {get;set;}
    public AccountContactWrapper(Account a,contact c) {
        this.acc=a;
        this.con=c;

    }
}