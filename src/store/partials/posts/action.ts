import { IPost } from '../../../models/post';
import { ReduxActionType_Payload, ReduxActionType_Simple } from '../../types/partials';

export const UPLOAD_POSTS = 'UPLOAD_POSTS';
export const CLEAR_POSTS = 'CLEAR_POSTS';

export const uploadPosts: ReduxActionType_Payload<IPost[]> = (data) => {
    return {
        type: UPLOAD_POSTS,
        payload: data
    }
}

export const clearPostsState: ReduxActionType_Simple = () => {
    return {
        type: CLEAR_POSTS
    }
}