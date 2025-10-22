trigger basictriggeraccount on SOBJECT (before insert) 
{
 if(trigger.isBefore && trigger.isInsert){
    if(!trigger.new.isEmpty())
    for(account accRecord:trigger.new){
        if(accRecord.phone==null){
            accRecord.addError('Please enter the phone number');
        }
    }
 }
}