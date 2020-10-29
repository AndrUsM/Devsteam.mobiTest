export interface IUser {
    accepted_tos: boolean,
    bio: string,
    first_name: string,
    id: string,
    instagram_username: string,
    last_name: string,
    location: any
    name: string,
    portfolio_url: string,
    total_collections: string[],
    total_likes: number,
    total_photos: number
    twitter_username: string,
    updated_at: string,
    username: string,
    links: IPortfolioLinks,
    profile_image: IImages
}

export interface IPortfolioLinks {
    followers: string,
    following: string,
    html: string,
    likes: string,
    photos: string,
    portfolio: string,
    self: string
}

export interface IImages {
    large: string,
    mediud: string,
    small: string
}