
export interface IBlog {
    id: number;
    slug: string;
    title: string;
    description: string;
    published_at: string;
}

export interface IBlogPostDetails {
    title: string;
    published_at: string;
    public_reactions_count: number;
    body_html: string;
    body_markdown: string;
    url: string;
    reading_time_minutes: number;

}

export interface IContactFormError {
    message: string;
    path: string[];
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    bio: string;
    photo: string;
    links: string[]
}

export interface IUserResponse {
    success: boolean;
    user: IUser
}