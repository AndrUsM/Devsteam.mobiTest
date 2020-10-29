import { IUser } from "./user";

export interface IPost {
    alt_description: string,
    blur_hash: string,
    categories: string[],
    color: string,
    created_at: Date,
    current_user_collections: string[],
    description: any,
    height: number,
    id: string,
    liked_by_user: false,
    likes: number,
    links: IPostLinks,
    promoted_at: Date,
    sponsorship: IPostSponsorshipts,
    updated_at: Date,
    urls: IPostUrls,
    user: IUser,
    width: number
}

export interface IPostLinks {
    download: string,
    download_location: string,
    html: string,
    self: string
}

export interface IPostUrls {
    full: string,
    raw: string,
    regular: string,
    small: string,
    thumb: string,
}

export interface IPostSponsorshipts {
    impression_urls: string[],
    sponsor: IUser,
    tagline: string,
    tagline_url: string
}