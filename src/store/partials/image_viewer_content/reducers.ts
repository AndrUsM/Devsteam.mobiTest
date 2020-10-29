import { Image } from 'react-native';
import { ImageViewerDTO } from '../../../models/dto/imageViewerDTO';
import { ReduxActionReturnType } from '../../types/partials';
import {
    UPLOAD_IMAGE_DATA, CLEAR_IMAGE_VIEWER_STATE
} from './action';

export const defaultImageViewerState: ImageViewerDTO = {
    source: {
        uri: ""
    },
    height: 0,
    width: 0,
    title: ""
}

export const images = (state: ImageViewerDTO = defaultImageViewerState, action: ReduxActionReturnType) => {
    switch (action.type) {
        case UPLOAD_IMAGE_DATA:
            return {
                state,
                ...action.payload
            }
        case CLEAR_IMAGE_VIEWER_STATE:
            return {
                ...{}
            }
        default:
            return state
    }
}