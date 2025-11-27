import { LightningElement, wire } from 'lwc';
import getCryptoPrices from '@salesforce/apex/CryptoService.getCryptoPrices';

export default class create_datatable_crypto_lwc_integrate extends LightningElement {
    data = [];

    columns = [
        { label: 'Name', fieldName: 'name' },
        { label: 'Symbol', fieldName: 'symbol' },
        { label: 'Current Price (USD)', fieldName: 'current_price', type: 'number' },
        { label: 'Market Cap', fieldName: 'market_cap', type: 'number' },
        { label: '24h Change (%)', fieldName: 'price_change', type: 'number' }
    ];

    @wire(getCryptoPrices)
    wiredCrypto({ data, error }) {
        if (data) {
            this.data = Array.isArray(data) ? data : [];
        } else if (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    }
}
