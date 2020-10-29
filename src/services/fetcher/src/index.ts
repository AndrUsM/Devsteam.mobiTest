import axios, { AxiosRequestConfig } from 'axios';
import { FetcherConfigType, FetcherMode } from './types';

export class FetcherController {
    private config: FetcherConfigType;
    private baseUrl: string;

    constructor(config: FetcherConfigType) {
        this.config = config;
        this.baseUrl = this.generateBaseUrl();
    }


    private generateBaseUrl() {
        return [
            this.config.protocol,
            this.generateDomain()
        ].join('://');
    }

    private generateDomain() {
        const {
            port, domain,
            prefix
        } = this.config;

        let _outValue = "";

        if (port && typeof port === 'number')
            _outValue = [domain, port].join(':');
        else
            _outValue = domain;

        if (prefix && typeof prefix === 'string' && prefix.length > 0)
            _outValue += `/${prefix}`;

        return _outValue;
    }

    private generateHeaders(mode: FetcherMode = FetcherMode.DEFAULT) {
        switch (mode) {
            case FetcherMode.NO_TOKEN: {
                break;
            }
            default:
            case FetcherMode.DEFAULT: {
                return {
                    'Content-Type': 'application/json'
                }
            }
        }
    }

    private generateOptions(
        url: AxiosRequestConfig["url"],
        method: AxiosRequestConfig['method'],
        data: AxiosRequestConfig["data"],
        mode: FetcherMode
    ) {

        const _url = [
            this.generateBaseUrl(),
            url
        ].join('/');

        switch (method) {
            case "HEAD":
            case "GET": {
                return {
                    url: _url,
                    baseURL: this.baseUrl,
                    method: method,
                    headers: this.generateHeaders(mode),
                }
            }
            default: {
                return {
                    url: _url,
                    baseURL: this.baseUrl,
                    method: method,
                    headers: this.generateHeaders(mode),
                    data: JSON.stringify(data)
                }
            }
        }
    }
    use(
        url: AxiosRequestConfig["url"],
        method: AxiosRequestConfig['method'],
        data: AxiosRequestConfig["data"],
        mode?: FetcherMode | undefined) {
        if (!mode)
            mode = FetcherMode.DEFAULT;
        return axios(this.generateOptions(url, method, data, mode));
    }
}