public with sharing class class_opport_datatable_using_wire_lwc {
    @AuraEnabled(cacheable=true)
    public static list<opportunity>fetchopp(string stext){
        string stxt='%'+stext+'%';
        List<opportunity> oppList=[select name,stageName,closeDate,description from opportunity where name like:stxt];
        return oppList;
    }
}