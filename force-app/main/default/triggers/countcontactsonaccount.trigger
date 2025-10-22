trigger countcontactsonaccount on contact (After insert,After update,after delete,after undelete) {
    set<Id>accIds=new set<Id>();
    List<Account>acctoupdate=new List<Account>();
    if(trigger.isAfter&& trigger.isInsert || trigger.isDelete){
        if(!trigger.new.isEmpty()){
        for(contact con:Trigger.new){
            if(con.accountId!=null){
                accIds.add(con.AccountId);  
            }
        }
        }
    }
    if(trigger.isAfter && trigger.isUpdate){
        if(!trigger.new.isEmpty()){
        for(contact con:Trigger.new){
            if(trigger.oldMap.get(con.Id).accountid!=con.AccountId){
                if(trigger.oldMap.get(con.Id).accountid!=null){
                    accIds.add(con.AccountId);  
                } 
            }
            if(con.AccountId!=null)
            {
                accIds.add(con.AccountId);
            }
        }
        }
    }
    if(trigger.isAfter && trigger.isDelete){
        for(contact conold:trigger.old){
            if(conold.AccountId!=null){
                accIds.add(conold.AccountId);
            }
        }
    }
    
    list<account> accList=[select id,No_Of_Contacts__c,(select id,name from contacts)from account where ID IN :accIds];
    if(!accList.isEmpty()){
    for(account acc:accList){
        acc.No_Of_Contacts__c=acc.contacts.size();
        acctoupdate.add(acc);
    }
    }

}