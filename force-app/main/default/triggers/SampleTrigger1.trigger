trigger SampleTrigger1 on SOBJECT (After insert) {
    list<case> newCaseRec=new list<case>();
    for(contact conRecord:trigger.new)
    {
        if(conRecord.AccountId!=null){
        case cs=new case();
        cs.status='Working';
        cs.Origin='web';
        cs.ContactId=conRecord.Id;
        cs.AccountId=conRecord.AccountId;
        newCaseRec.add(cs);
        }
    }
if(!newCaseRec.isEmpty())
{
    Insert newCaseRec;
}

}