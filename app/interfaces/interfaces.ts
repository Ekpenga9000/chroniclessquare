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