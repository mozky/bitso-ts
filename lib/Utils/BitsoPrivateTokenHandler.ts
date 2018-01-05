import * as crypto from 'crypto'
import * as ifm from 'typed-rest-client/Interfaces'

export default class PersonalAccessTokenCredentialHandler implements ifm.IRequestHandler {
    private token: string
    private key: string
    private secret: string
    private nonce: number
    private httpMethod: string
    private requestPath: string
    private jsonPayload: string

    constructor(
        key: string,
        secret: string,
        httpMethod: string,
        requestPath: string,
        jsonPayload: string = '') {
        this.key = key
        this.secret = secret
        this.nonce = new Date().getTime()
        this.httpMethod = httpMethod
        this.requestPath = requestPath
        this.jsonPayload = jsonPayload
        this.token = this.createAuthorizationHeader()
    }

    public prepareRequest(options: any): void {
        options.headers['Authorization'] = this.token
    }

    // This handler cannot handle 401
    public canHandleAuthentication(res: ifm.IHttpResponse): boolean {
        return false
    }

    public handleAuthentication(httpClient: any, protocol: any, options: any, objs: any, finalCallback: any): void {
        // TODO
    }

    private createAuthorizationHeader(): string {
      const data = this.nonce + this.httpMethod + this.requestPath + this.jsonPayload
      const signature = crypto.createHmac('sha256', this.secret).update(data).digest('hex')
      return `Bitso ${this.key}:${this.nonce}:${signature}`
    }

}
