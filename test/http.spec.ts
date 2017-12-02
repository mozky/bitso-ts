import { expect } from 'chai'
import * as hm from 'typed-rest-client/Handlers'
import * as httpm from 'typed-rest-client/HttpClient'

describe('Http Tests', function() {
    let http: httpm.HttpClient

    before(() => {
        http = new httpm.HttpClient('typed-test-client-tests')
    })

    it('constructs', () => {
        this.timeout(1000)

        const _http: httpm.HttpClient = new httpm.HttpClient('typed-test-client-tests')
        expect(_http, 'http client should not be null')
    })
})
