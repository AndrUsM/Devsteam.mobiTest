export type ImageViewerDTO = {
    source: ImageViewerSource,
    title: string,
    width: number,
    height: number
}

export type ModalMenuStatus = {
    status: boolean
}

type ImageViewerSource = {
    uri: string
}