export interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: Src;
    liked: boolean;
    alt: string;
}

export interface Src {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
}

interface Miscellaneous {
    page: number;
    per_page: number;
    total_results: number;
    prev_page: number;
    next_page: number;
}

export interface SearchPhoto extends Miscellaneous {
    photos: Photo[]
}

export interface VideoResponse {
    id: number;
    width: number;
    height: number;
    url: string;
    image: string;
    duration: number;
    user: User;
    video_files: VideoFile[];
    video_pictures: VideoPicture[];
}

export interface User {
    id: number;
    name: string;
    url: string;
}

export interface VideoFile {
    id: number;
    quality: string;
    file_type: string;
    width: number | null;
    height: number | null;
    link: string;
}

export interface VideoPicture {
    id: number;
    picture: string;
    nr: number;
}

export interface SearchVideo extends Miscellaneous {
    videos: VideoResponse[]
    url: string;
}

export interface Media {
    type: string;
    id: number;
    width: number;
    height: number;
    url: string;
    photographer?: string;
    photographer_url?: string;
    photographer_id?: number;
    avg_color: null | string;
    src?: Src;
    liked?: boolean;
    duration?: number;
    full_res?: null;
    tags?: any[];
    image?: string;
    user?: User;
    video_files?: VideoFile[];
    video_pictures?: VideoPicture[];
}

export interface Collection extends Miscellaneous {
    media: Media[];
    id: number;
}

export interface Collections extends Miscellaneous {
    collections: Collection[];
}

