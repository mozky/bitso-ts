import * as rm from 'typed-rest-client/RestClient'
import BitsoAccountStatus from './BitsoAccountStatus'
import BitsoBalance from './BitsoBalance'
import BitsoOrderBook from './BitsoOrderBook'
import BitsoResponse from './BitsoResponse'
import BitsoTicker from './BitsoTicker'
import BitsoTransactions from './BitsoTransactions'
import Book from './Book'
import BookInfo from './BookInfo'
import BitsoPrivateTokenHandler from './Utils/BitsoPrivateTokenHandler'

export default class Bitso {
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
    if (res.statusCode === 200 && res.result && res.result.success) {
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

    if (res.statusCode === 200 && res.result && res.result.success) {
      res.result.payload.map((ticker: any) => {
        tickers.push(new BitsoTicker().deserialize(ticker))
      })
    }

    return tickers
  }

  public async getTicker(book: string): Promise<BitsoTicker> {
    const rest: rm.RestClient = new rm.RestClient('nodejs', this.BITSO_BASE_URL_PRODUCTION)

    const bookie = new Book(book)

    const res: rm.IRestResponse<BitsoResponse<BitsoTicker>> =
      await rest.get<BitsoResponse<BitsoTicker>>(`/v3/ticker?book=${new Book(book).getTicker()}`)

    const ticker: BitsoTicker = new BitsoTicker()

    if (res.statusCode === 200 && res.result && res.result.success) {
      ticker.deserialize(res.result.payload)
    }

    return ticker
  }

  public async getOrderBook(book: string, aggregate: boolean): Promise<BitsoOrderBook> {
    const rest: rm.RestClient = new rm.RestClient('nodejs', this.BITSO_BASE_URL_PRODUCTION)

    const bookie = new Book(book)

    const res: rm.IRestResponse<BitsoResponse<BitsoOrderBook>> =
      await rest.get<BitsoResponse<BitsoOrderBook>>(
        `/v3/order_book?book=${new Book(book).getTicker()}&aggregate=${aggregate ? 'true' : 'false'}`)

    const orderBook: BitsoOrderBook = new BitsoOrderBook()

    if (res.statusCode === 200 && res.result && res.result.success) {
      orderBook.deserialize(res.result.payload)
    }

    return orderBook
  }

  public async getTrades(book: string): Promise<BitsoTransactions> {
    const rest: rm.RestClient = new rm.RestClient('nodejs', this.BITSO_BASE_URL_PRODUCTION)

    const res: rm.IRestResponse<BitsoResponse<BitsoTransactions>> =
      await rest.get<BitsoResponse<BitsoTransactions>>(`/v3/trades?book=${new Book(book).getTicker()}`)

    const transactions: BitsoTransactions = new BitsoTransactions()

    if (res.statusCode === 200 && res.result && res.result.success) {
      transactions.deserialize(res.result.payload)
    }

    return transactions
  }

  public async getAccountStatus(): Promise<BitsoAccountStatus> {
    const httpMethod = 'GET'
    const requestPath = '/v3/account_status/'
    const header: BitsoPrivateTokenHandler =
      new BitsoPrivateTokenHandler(this.key, this. secret, httpMethod, requestPath)

    const rest: rm.RestClient = new rm.RestClient('nodejs', this.BITSO_BASE_URL_PRODUCTION, [header])

    const res: rm.IRestResponse<BitsoResponse<BitsoAccountStatus>> =
      await rest.get<BitsoResponse<BitsoAccountStatus>>(requestPath)

    const accountStatus: BitsoAccountStatus = new BitsoAccountStatus()

    if (res.statusCode === 200 && res.result && res.result.success) {
      accountStatus.deserialize(res.result.payload)
    }

    return accountStatus
  }

  public async getAccountBalance(): Promise<BitsoBalance> {
    const httpMethod = 'GET'
    const requestPath = '/v3/balance'

    const header: BitsoPrivateTokenHandler =
      new BitsoPrivateTokenHandler(this.key, this. secret, httpMethod, requestPath)

    const rest: rm.RestClient = new rm.RestClient('nodejs', this.BITSO_BASE_URL_PRODUCTION, [header])

    const res: rm.IRestResponse<BitsoResponse<BitsoBalance>> =
      await rest.get<BitsoResponse<BitsoBalance>>(requestPath)

    const accountBalance: BitsoBalance = new BitsoBalance()

    if (res.statusCode === 200 && res.result && res.result.success) {
      accountBalance.deserialize(res.result.payload)
    }

    return accountBalance
  }

}
