export class Bitso {
  private BITSO_BASE_URL_PRODUCTION: string = "https://api.bitso.com";
  private BITSO_BASE_URL_DEVELOPMENT: string = "https://dev.bitso.com";

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

}
