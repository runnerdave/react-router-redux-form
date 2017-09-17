import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
const BASE_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=75c54aa8-1092-491c-9fe2-469e0865884f';

export function fetchPosts() {
    const request = axios.get(`${BASE_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}