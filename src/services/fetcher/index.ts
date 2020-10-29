import { AxiosRequestConfig } from "axios";
import { FetcherController } from "./src";
import { FetcherConfigType } from "./src/types"

export class Fetcher {
    private config: FetcherConfigType;
    private fetcherController;

    constructor(config: FetcherConfigType) {
        this.config = config;
        this.fetcherController = new FetcherController(this.config);
    }

    useWithoutData(url: string, method: AxiosRequestConfig['method']) {
        return this.fetcherController.use(url, method, {});
    }
    useWithData(url: string, method: AxiosRequestConfig['method'], data: AxiosRequestConfig['data']) {
        return this.fetcherController.use(url, method, data);
    }

    get(url: string) {
        return this.useWithoutData(url, 'GET');
    }
    head(url: string) {
        return this.useWithoutData(url, 'HEAD');
    }

    post(url: string, data: AxiosRequestConfig['data']) {
        return this.useWithData(url, "POST", data);
    }
    patch(url: string, data: AxiosRequestConfig['data']) {
        return this.useWithData(url, "PATCH", data);
    }
    delete(url: string, data: AxiosRequestConfig['data']) {
        return this.useWithData(url, "DELETE", data);
    }
    put(url: string, data: AxiosRequestConfig['data']) {
        return this.useWithData(url, "PUT", data);
    }
}