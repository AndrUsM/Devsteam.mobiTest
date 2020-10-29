export type FetcherConfigType = {
    domain: string,
    protocol: string,
    port?: number,
    prefix?: string
}

export enum FetcherMode {
    DEFAULT,
    NO_TOKEN
}
