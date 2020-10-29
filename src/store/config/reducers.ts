import { combineReducers } from 'redux';

import { posts } from '../partials/posts/reducers';
import { images } from '../partials/image_viewer_content/reducers';
import { image_viewer_status } from '../partials/image_viewer_status/reducers';

export const appReducer = combineReducers({
    posts: posts,
    images: images,
    image_viewer_status: image_viewer_status
});