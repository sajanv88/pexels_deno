export type Color = 'red' | 'orange' | 'yellow' | 'green' | 'turquoise' | 'blue' | 'violet' | 'pink' | 'brown' | 'black' | 'gray' | 'white';
export type Locale = 'en-US' | 'pt-BR' | 'es-ES' | 'ca-ES' | 'de-DE' | 'it-IT' | 'fr-FR' | 'sv-SE' | 'id-ID' | 'pl-PL' | 'ja-JP' | 'zh-TW' | 'zh-CN' | 'ko-KR' | 'th-TH' | 'nl-NL' | 'hu-HU' | 'vi-VN' | 'cs-CZ' | 'da-DK' | 'fi-FI' | 'uk-UA' | 'el-GR' | 'ro-RO' | 'nb-NO' | 'sk-SK' | 'tr-TR' | 'ru-RU';
export type Orientation = 'landscape' | 'portrait' | 'square';
export type Size = 'large' | 'medium' | 'small';

export interface SearchQueryOption {
    query: string;
    orientation?: Orientation;
    size?: Size;
    color?: string | Color;
    Locale?: Locale
}

export interface VideoParameter {
    min_width?: number;
    min_height?: number;
    min_duration?: number;
    max_duration?: number;
    page?: number;
    per_page?: number;
}