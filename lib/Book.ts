export default class Book {
    private ticker: string

    constructor(ticker: string) {
        if (ticker in Ticker) {
            for (const t in Ticker) {
                if (ticker === t) {
                    this.ticker = Ticker[t]
                }
            }
        } else {
            this.ticker = Ticker.BTC_MXN
        }
    }

    public getTicker(): string {
        return this.ticker
    }

}

enum Ticker {
    BTC_MXN = 'btc_mxn',
    ETH_MXN = 'eth_mxn',
    XRP_BTC = 'xrp_btc',
    XRP_MXN = 'xrp_mxn',
    ETH_BTC = 'eth_btc',
    BCH_BTC = 'bch_btc',
    LTC_BTC = 'ltc_btc',
    LTC_MXN = 'ltc_mxn',
}
