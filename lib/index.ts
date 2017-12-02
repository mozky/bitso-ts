import * as rm from 'typed-rest-client/RestClient'
import BitsoResponse from './BitsoResponse'
import BitsoTicker from './BitsoTicker'
import BookInfo from './BookInfo'

export class Bitso {
  private BITSO_BASE_URL_PRODUCTION: string = 'https://api.bitso.com'
  private BITSO_BASE_URL_DEVELOPMENT: string = 'https://dev.bitso.com'

  private key: string
  private secret: string
  private log: boolean
  private baseUrl: string

  constructor(key: string, secret: string, log?: boolean, production?: boolean) {
    this.key = key
    this.secret = secret
    this.log = log ? log : true
    this.baseUrl = production ? this.BITSO_BASE_URL_PRODUCTION : this.BITSO_BASE_URL_DEVELOPMENT
  }

  // Public Functions
  public async getAvailableBooks(): Promise<BookInfo[]> {
    const rest: rm.RestClient = new rm.RestClient('nodejs', this.BITSO_BASE_URL_PRODUCTION)

    const res: rm.IRestResponse<BitsoResponse<BookInfo>> =
      await rest.get<BitsoResponse<BookInfo>>('/v3/available_books/')

    const books: BookInfo[] = []

    // TODO: I dont like this method, the upper function should
    // deserialize the payload also, still need to find a way of doing this
    if (res.statusCode === 200 && res.result.success) {
      res.result.payload.map((book: any) => {
        books.push(new BookInfo().deserialize(book))
      })
    }

    return books
  }

  public async getTickers(): Promise<BitsoTicker[]> {
    const rest: rm.RestClient = new rm.RestClient('nodejs', this.BITSO_BASE_URL_PRODUCTION)

    const res: rm.IRestResponse<BitsoResponse<BitsoTicker>> =
      await rest.get<BitsoResponse<BitsoTicker>>('/v3/ticker')

    const tickers: BitsoTicker[] = []

    if (res.statusCode === 200 && res.result.success) {
      res.result.payload.map((ticker: any) => {
        tickers.push(new BitsoTicker().deserialize(ticker))
      })
    }

    console.log(tickers)

    return tickers
  }
}
