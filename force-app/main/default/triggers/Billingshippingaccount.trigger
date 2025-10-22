trigger Billingshippingaccount on SOBJECT (before insert) 
{
    if(trigger.isBefore && trigger.isInsert){
        if(!trigger.new.isEmpty()){
            for(account accRecord:trigger.new){
                if(accRecord.BillingCity!=null){
                    accrecord.shippingCity=accRecord.BillingCity;
                }
                if(accRecord.BillingStreet!=null){
                    accrecord.shippingStreet=accRecord.BillingStreet;
                }
                if(accRecord.BillingState!=null){
                    accrecord.shippingState=accRecord.BillingState;
                }
                if(accRecord.BillingCountry!=null){
                    accrecord.shippingCountry=accRecord.BillingCountry;
                }
                if(accRecord.BillingPostalCode!=null){
                    accrecord.shippingPostalCode=accRecord.BillingPostalCode;
                }        
            }
        }
    }

}