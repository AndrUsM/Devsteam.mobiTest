import { ImageViewerDTO } from '../../../models/dto/imageViewerDTO';
import { ReduxActionType_Payload, ReduxActionType_Simple } from '../../types/partials';

export const UPLOAD_IMAGE_DATA = 'UPLOAD_IMAGE_DATA';
export const CLEAR_IMAGE_VIEWER_STATE = 'CLEAR_POSTS';

export const uploadImage: ReduxActionType_Payload<ImageViewerDTO> = (data) => {
    return {
        type: UPLOAD_IMAGE_DATA,
        payload: data
    }
}

export const clearImagesState: ReduxActionType_Simple = () => {
    return {
        type: CLEAR_IMAGE_VIEWER_STATE
    }
}