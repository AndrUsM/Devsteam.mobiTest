import Axios from "axios";
import { defaultFetchUseCase } from "../fetcher/useCases";

export const getPosts = (id: string) => {
    return defaultFetchUseCase.get(`photos/?client_id=${id}`);
}