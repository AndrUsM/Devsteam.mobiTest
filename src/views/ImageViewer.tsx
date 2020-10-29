import React from 'react';
import ImageView from 'react-native-image-view';
import { defaultImageViewerState } from "../store/partials/image_viewer_content/reducers";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType } from "../store/types/state";
import { setImageViewerStatus } from '../store/partials/image_viewer_status/action';

export function PostImageViewer() {
    const dispatch = useDispatch();
    const imagesRedux = useSelector((state: ReduxStateType) => state.images);
    const ImageViewerStatusRedux = useSelector((state: ReduxStateType) => state.image_viewer_status);


    function getImageData() {
        return Object.keys(imagesRedux).length > 0 ?
            imagesRedux : defaultImageViewerState
    }

    return (
        <ImageView
            animationType="fade"
            images={
                [getImageData()]
            }
            imageIndex={0}
            onClose={
                () => {
                    dispatch(setImageViewerStatus({
                        status: false
                    }))
                }
            }
            isVisible={ImageViewerStatusRedux.status}
        />
    )
}