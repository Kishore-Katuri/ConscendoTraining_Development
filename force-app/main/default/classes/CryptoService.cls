public with sharing class CryptoService {
    @AuraEnabled(cacheable=true)
    public static List<CryptoWrapper> getCryptoPrices() {

        Http http = new Http();
        HttpRequest req = new HttpRequest();

        // CoinGecko Real-Time Crypto Prices
        req.setEndpoint('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        req.setMethod('GET');

        HttpResponse res = http.send(req);

        if (res.getStatusCode() == 200) {

            List<Object> jsonList = 
                (List<Object>) JSON.deserializeUntyped(res.getBody());

            List<CryptoWrapper> output = new List<CryptoWrapper>();

            for (Object o : jsonList) {
                Map<String, Object> c = (Map<String, Object>) o;

                CryptoWrapper cw = new CryptoWrapper();
                cw.id = (String) c.get('id');
                cw.symbol = (String) c.get('symbol');
                cw.name = (String) c.get('name');
                cw.current_price = String.valueOf(c.get('current_price'));
                cw.market_cap = String.valueOf(c.get('market_cap'));
                cw.price_change = String.valueOf(c.get('price_change_percentage_24h'));

                output.add(cw);
            }

            return output;
        }

        throw new AuraHandledException('API Failed: ' + res.getStatus());
    }

    public class CryptoWrapper {
        @AuraEnabled public String id;
        @AuraEnabled public String symbol;
        @AuraEnabled public String name;
        @AuraEnabled public String current_price;
        @AuraEnabled public String market_cap;
        @AuraEnabled public String price_change;
    }
}
