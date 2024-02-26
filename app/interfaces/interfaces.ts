// Objective: Define the interfaces for the components and services in the app
export interface FeedItemProps {
    creatorId: string;
    topicId: string;
    upvotes: number;
    username: string;
    datePosted: string;
    topic: string;
}

export interface PopularTagsProps { 
    tags: string[];
    title: string;
}

export interface CodeSnippetProps {
    code: string;
}

export interface ProfileProps {
    personal: boolean;
    username: string;
    profession: string;
    bio: string;
    links: {
        website?: string;
        github?: string;
        twitter?: string;
        linkedin?: string;
        coffee?: string;
    } | null;
}