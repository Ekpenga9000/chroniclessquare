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

export interface ContentDetails {
  // id: string;
  type: string;
  value: string;
}

// Db Models
type Socials = {
  platform: string;
  url: string;
};

interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  user: User;
}

interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user: User;
}

interface VerificationToken {
  identifier: string;
  token: string;
  expires: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
  accounts: Account[];
  sessions: Session[];
  socials: Socials[];
  buyMeACoffee: string | null;
}
