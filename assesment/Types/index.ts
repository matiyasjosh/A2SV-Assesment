export interface BlogSenderTitle {
    name: string;
    postedDate: string;
    career: string;
    senderImage: string;
}

export interface BlogPostListProps {
    name: string;
    postedDate: string;
    career: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    senderImage: string;
}