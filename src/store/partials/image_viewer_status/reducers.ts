import { ModalMenuStatus } from '../../../models/dto/imageViewerDTO';
import { ReduxActionReturnType } from '../../types/partials';
import {
    SET_IMAGE_VIEWER_STATUS, RESET_IMAGE_VIEWER_STATUS
} from './action';

export const defaultImageViewerStatusState: ModalMenuStatus = {
    status: false
}

export const image_viewer_status = (state = defaultImageViewerStatusState, action: ReduxActionReturnType) => {
    switch (action.type) {
        case SET_IMAGE_VIEWER_STATUS:
            return {
                state,
                ...action.payload
            }
        case RESET_IMAGE_VIEWER_STATUS:
            return {
                ...{}
            }
        default:
            return state
    }
}