public with sharing class Account_create_lwc_imperative_1 {
    @AuraEnabled
    public static string acccreate(string accname,string accphone, string accrating, string accindustry){
        string msgs;
        try {
            Account acc=New Account();
            acc.Name=accname;
            acc.Phone=accphone;
            acc.Rating=accrating;
            acc.Industry=accindustry;
            insert acc;
            msgs='Account Created Successfully'+acc.id;
        } catch (Exception e) {
            msgs='Account is not created'+e.getMessage();
        }
        return msgs;
   
    }
}