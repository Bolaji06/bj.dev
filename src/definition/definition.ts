
export interface IBlog {
    id: number;
    title: string;
    description: string;
    timestamp: string;
}

export interface IBlogPostDetails {
    title: string;
    published_at: string;
    public_reactions_count: number;
    body_html: string;
    url: string;
    reading_time_minutes: number;

}