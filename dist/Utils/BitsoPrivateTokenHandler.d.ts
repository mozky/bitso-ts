import * as ifm from 'typed-rest-client/Interfaces';
export default class PersonalAccessTokenCredentialHandler implements ifm.IRequestHandler {
    private token;
    private key;
    private secret;
    private nonce;
    private httpMethod;
    private requestPath;
    private jsonPayload;
    constructor(key: string, secret: string, httpMethod: string, requestPath: string, jsonPayload?: string);
    prepareRequest(options: any): void;
    canHandleAuthentication(res: ifm.IHttpResponse): boolean;
    handleAuthentication(httpClient: any, protocol: any, options: any, objs: any, finalCallback: any): void;
    private createAuthorizationHeader();
}
