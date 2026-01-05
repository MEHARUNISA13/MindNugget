// Book data types
export interface Book {
    id: string;
    slug: string;
    title: string;
    author: string;
    category: string[];
    coverImage: string;
    rating: number;
    reviewCount: number;
    readTime: number; // in minutes
    audioUrl?: string;
    audioDuration?: number; // in seconds
    summary: {
        short: string; // 2-3 sentences for preview
        full: string; // detailed summary
        keyPoints: string[];
    };
    publishedDate: string;
    popularity: number;
    isbn?: string;
}

export interface BookCategory {
    id: string;
    name: string;
    slug: string;
    icon: string;
    bookCount: number;
}

export interface AudioPlayerState {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    playbackRate: number;
    isMuted: boolean;
}
