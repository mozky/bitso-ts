import BitsoTicker from './BitsoTicker';
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
}
