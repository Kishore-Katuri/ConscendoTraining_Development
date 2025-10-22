trigger leadphonetrigger on Lead (before insert,before update) {
    trigger leadnameduplicate on Lead (before insert,before update) {
    set<Id>leadIds=new set<Id>();
    if(trigger.isBefore && trigger.isUpdate || trigger.isInsert){
        for(lead l:trigger.new){
            if(l.phone!=null){
                leadIds.add(l.Id);
            }
        }
    }
    list<lead>LeadList=[select id,phone from lead where ID IN :leadIds];
    for(lead l:trigger.new){
    for(lead leadRecord:LeadList){
        if(l.Phone==leadRecord.phone){
            l.addError('You cannot create lead with duplicate phone ');
        }
    }
    }

}

}