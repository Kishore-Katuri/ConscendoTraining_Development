trigger oppamountlimitgreaterblock on opportunity (before insert) {
    set<Id>opacIds=new set<Id>();
    if(trigger.isbefore && trigger.isInsert){
        for(opportunity opp:trigger.new){
            if(opp.AccountId!=null){
                opacIds.add(opp.AccountId);
            }
        }
    }
    map<id,decimal>accountSumMap=new map<id,decimal>();
    list<AggregateResult>aggresult=[select account.id,sum(amount) totalamount from opportunity where accountId IN:opacIds Group By Account.Id ];
    for(AggregateResult agg:aggresult){
        accountSumMap.put((Id)agg.get('Account.id'),(decimal)agg.get('totalamount'));
    }
     for (Opportunity opp : Trigger.new) {
            if (opp.AccountId != null) {
                Decimal totalAmount = 0;

                // Get existing sum for this Account (if any)
                if (accountSumMap.containsKey(opp.AccountId)) {
                    totalAmount = accountSumMap.get(opp.AccountId);
                }

                // Add the new Opportunity amount
                if (opp.Amount != null) {
                    totalAmount = totalAmount + opp.Amount;
                }

                // Block if limit exceeded
                if (totalAmount > 200000) {
                    opp.addError('Cannot create Opportunity. Total Opportunity Amount for this Account exceeds 200,000.');
                }
            }
        }
    }


