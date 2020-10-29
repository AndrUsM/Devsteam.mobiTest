import { ReduxActionReturnType } from '../../types/partials';
import {
    UPLOAD_POSTS, CLEAR_POSTS
} from './action';

export const posts = (state={}, action: ReduxActionReturnType) => {
    switch (action.type) {
        case UPLOAD_POSTS:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_POSTS:
            return {
                ...{}
            }
        default:
            return state
    }
}