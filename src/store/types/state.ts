import { ImageViewerDTO, ModalMenuStatus } from "../../models/dto/imageViewerDTO";
import { IPost } from "../../models/post";

export type ReduxStateType = {
    posts: IPost[],
    images: ImageViewerDTO,
    image_viewer_status: ModalMenuStatus,
}