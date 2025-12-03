public with sharing class OpportunityPaginationStandardCtrl {

    @AuraEnabled(cacheable=true)
    public static Map<String, Object> getOpportunities(Integer pageSize, Integer pageNumber) {

        Integer offsetValue = (pageNumber - 1) * pageSize;

        Integer totalRecords = [SELECT COUNT() FROM Opportunity];

        List<Opportunity> oppList = [
            SELECT Id, Name, StageName, Amount, CloseDate
            FROM Opportunity
            ORDER BY CreatedDate DESC
            LIMIT :pageSize
            OFFSET :offsetValue
        ];

        return new Map<String, Object>{
            'records' => oppList,
            'totalRecords' => totalRecords
        };
    }
}
