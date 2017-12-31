import BitsoAccountStatus from './BitsoAccountStatus';
import BitsoBalance from './BitsoBalance';
import BitsoOrderBook from './BitsoOrderBook';
import BitsoTicker from './BitsoTicker';
import BitsoTransactions from './BitsoTransactions';
import BookInfo from './BookInfo';
export default class Bitso {
    private BITSO_BASE_URL_PRODUCTION;
    private BITSO_BASE_URL_DEVELOPMENT;
    private key;
    private secret;
    private log;
    private baseUrl;
    constructor(key: string, secret: string, log?: boolean, production?: boolean);
    getAvailableBooks(): Promise<BookInfo[]>;
    getTickers(): Promise<BitsoTicker[]>;
    getTicker(book: string): Promise<BitsoTicker>;
    getOrderBook(book: string, aggregate: boolean): Promise<BitsoOrderBook>;
    getTrades(book: string): Promise<BitsoTransactions>;
    getAccountStatus(): Promise<BitsoAccountStatus>;
    getAccountBalance(): Promise<BitsoBalance>;
}
