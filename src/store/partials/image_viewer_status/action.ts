import { ModalMenuStatus } from '../../../models/dto/imageViewerDTO';
import { ReduxActionType_Payload, ReduxActionType_Simple } from '../../types/partials';

export const SET_IMAGE_VIEWER_STATUS = 'SET_IMAGE_VIEWER_STATUS';
export const RESET_IMAGE_VIEWER_STATUS = 'RESET_IMAGE_VIEWER_STATUS';

export const setImageViewerStatus: ReduxActionType_Payload<ModalMenuStatus> = (data) => {
    return {
        type: SET_IMAGE_VIEWER_STATUS,
        payload: data
    }
}

export const resetImageViewerStatus: ReduxActionType_Simple = () => {
    return {
        type: RESET_IMAGE_VIEWER_STATUS
    }
}