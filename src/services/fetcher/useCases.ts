import { Fetcher } from ".";
import { defautFetcherConfig } from "./config/default";

export const defaultFetchUseCase = new Fetcher(defautFetcherConfig);