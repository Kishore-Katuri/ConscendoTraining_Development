public with sharing class freeapiexample {
    public static void freeapiexample() {
        Http h=new Http();
        httpRequest request=New HttpRequest();
        request.setEndpoint('https://dog.ceo/api/breeds/image/random');
        request.setMethod('GET');
        HttpResponse response=h.send(request);
        map<string,object> responsemap=(map<string,object>)JSON.deserializeUntyped(response.getBody());
        system.debug(responsemap);
        system.debug(responsemap.get('message'));
    
        )

    }
}