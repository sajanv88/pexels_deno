import Settings from './settings.ts';
import Endpoints from './endpoints.ts';
import { get } from './request.ts';
import { Photo, SearchPhoto, SearchVideo, Collection, Collections } from './responseModel.ts';
import { SearchQueryOption, VideoParameter } from './types.ts';

class PexelsApi {
    #apiVersion: string;
    #apiKey: string;

    constructor(apiKey: string, apiVersion: string = 'v1') {
        this.#apiVersion = apiVersion;
        if (!apiKey) {
            throw new Error(`Pexels API key is missing`);
        }
        this.#apiKey = apiKey;
    }

    #getBaseUrl = () => {
        return `${Settings.PEXELS_API_BASE}/${this.#apiVersion}`
    }

    #getAuthorizationHeader = () => {
        return { 'Authorization': `${this.#apiKey} ` };
    }

    /**
    * Get Pexels API verison
    * @returns {string}
    */
    getPexelsApiVerison = (): string => this.#apiVersion;

    /**
     * Request a specific photo by ID and it returns a promise of Photo object.
     * @param {number} id
     * @returns {Promise<Photo>}
     */
    getPhotoById = async (id: number): Promise<Photo> => {
        const url = `${this.#getBaseUrl()}/${Endpoints.PHOTOS_URL}/${id}`;
        return await get<Photo>(url, this.#getAuthorizationHeader());
    }

    /**
     * Search photos in Pexels API
     * @param {SearchQueryOption} qp Search term
     * @param {number} page Specifies the page being requested (Defaults to 1)
     * @param {number} perPage Specifies the number of items per page (Defaults to 10)
     * @returns {Promise<SearchPhoto>}
     */
    searchPhotos = async (qp: SearchQueryOption, page: number = 1, perPage: number = 15): Promise<SearchPhoto> => {
        if (!qp.query) throw new Error('Query is required field. The search query. Ocean, Tigers, Pears, etc.')
        const query = Object.keys(qp).
            map((k) => {
                if (qp[k as keyof SearchQueryOption])
                    return `${k}=${qp[k as keyof SearchQueryOption]}`
                return undefined;
            })
            .filter(Boolean)
            .join('&');

        const qs = `${query.toLowerCase()}&per_page=${perPage}&page=${page}`;
        const url = `${this.#getBaseUrl()}/${Endpoints.SEARCH_URL}?${qs}`;
        console.log(url, 'url')
        return await get<SearchPhoto>(url, this.#getAuthorizationHeader());
    }

    /**
     * Random photos in Pexels API
     * @param {number} perPage Specifies the number items per page (Defaults to 1)
     * @returns {Promise<SearchPhoto>}
     */
    getRandomPhotos = async (perPage: number = 1): Promise<SearchPhoto> => {
        const random = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
        const url = `${this.#getBaseUrl()}/${Endpoints.CURATED_URL}?page=${random}&per_page=${perPage}`;
        return await get<SearchPhoto>(url, this.#getAuthorizationHeader());
    }

    /**
     * Trending photos from Pexels API
     * @param {number} page Specifies the page being requested (Defaults to 1)
     * @param {number} perPage Specifies the number items per page (Defaults to 1)
     * @returns {Promise<SearchPhoto>}
     */
    getTrendingPhotos = async (page: number = 1, perPage: number = 15): Promise<SearchPhoto> => {
        const url = `${this.#getBaseUrl()}/${Endpoints.CURATED_URL}?page=${page}&per_page=${perPage}`;
        return await get<SearchPhoto>(url, this.#getAuthorizationHeader());
    }

    /**
     * Search videos in Pexels API
     * @param {SearchQueryOption} Search term
     * @param {number} page Specifies the page being requested (Defaults to 1)
     * @param {number} perPage Specifies the number of items per page (Defaults to 10)
     * @returns {Promise<SearchVideo>}
     */
    searchVideos = async (qp: SearchQueryOption, page: number = 1, perPage: number = 10): Promise<SearchVideo> => {
        if (!qp.query) throw new Error('Query is required field. The search query. Ocean, Tigers, Pears, etc.')
        const query = Object.keys(qp).
            map((k) => {
                if (qp[k as keyof SearchQueryOption])
                    return `${k}=${qp[k as keyof SearchQueryOption]}`;
                return undefined;
            })
            .filter(Boolean)
            .join('&');
        const qs = `${query.toLowerCase()}& per_page=${perPage}&page=${page}`;
        const url = `${this.#getBaseUrl()}/${Endpoints.VIDEO_SEARCH_URL}?${qs}`;
        return await get<SearchVideo>(url, this.#getAuthorizationHeader());
    }

    /**
     * Popular videos from Pexels API
     * @param {number} page Specifies the page being requested (Defaults to 1)
     * @param {number} perPage Specifies the number items per page (Defaults to 1)
     * @returns {Promise<SearchVideo>}
     */
    getPopularVideos = async (vp?: VideoParameter): Promise<SearchVideo> => {
        let url = `${this.#getBaseUrl()}/${Endpoints.POPULAR_VIDEO_URL}`;
        if (vp) {
            const query = Object.keys(vp).
                map((k) => {
                    if (vp[k as keyof VideoParameter])
                        return `${k}=${vp[k as keyof VideoParameter]}`;
                    return undefined;
                })
                .filter(Boolean)
                .join('&');
            url += `?${query}`;
            return await get<SearchVideo>(url, this.#getAuthorizationHeader());
        }
        return await get<SearchVideo>(url, this.#getAuthorizationHeader());
    }


    /**
     * Request my collections  and it returns a promise that as your Collection on Pexels.
     * @param {number} id
     * @returns {Promise<Collection>}
     */
    getMyCollection = async (page: number = 1, perPage: number = 15): Promise<Collection> => {
        const url = `${this.#getBaseUrl()}/${Endpoints.MY_COLLECTIONS}?page=${page}&per_page=${perPage}`;
        return await get<Collection>(url, this.#getAuthorizationHeader());
    }

    /**
    * Request get getCollectionsMedia and,it returns a promise that as Collections on Pexels.
    * @param {string} id
    * @param {type} 'photos' | 'videos' | 'all'
    * @returns {Promise<Collections>}
    */
    getCollectionsMedia = async (id: string,
        type: 'photos' | 'videos' | 'all',
        page: number = 1, perPage: number = 15): Promise<Collections> => {
        let url = `${this.#getBaseUrl()}/${Endpoints.MY_COLLECTIONS}/${id}?type=${type}&page=${page}&per_page=${perPage}`;
        if (type === 'all') {
            url = url.replace('type=all&', '');
        }
        return await get<Collections>(url, this.#getAuthorizationHeader());
    }

    /**
     * Request featured collections and, it returns a promise that as all feature Collections on Pexels.
     * @param {number} id
     * @returns {Promise<Collections>}
   */
    getFeaturedCollections = async (page: number = 1, perPage: number = 15): Promise<Collections> => {
        const url = `${this.#getBaseUrl()}/${Endpoints.FEATURED_COLLECTIONS}?page=${page}&per_page=${perPage}`;
        return await get<Collections>(url, this.#getAuthorizationHeader());
    }
}

export default PexelsApi;
