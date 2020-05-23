/**
 * @author admin
 */

import axios from 'axios';

export const githubClient = axios.create({
    baseURL: process.env.GITHUB_URI,
    headers: {
        Authorization: `Bearer ${process.env.GITHUB_AUTH_TOKEN}`
    }
});
