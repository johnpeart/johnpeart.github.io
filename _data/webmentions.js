const fs = require('fs');
const unionBy = require('lodash/unionBy');
const domain = 'www.johnpe.art';

// Load .env variables with dotenv
require('dotenv').config();

// Define Cache Location and API Endpoint
const CACHE_DIR = './_data';
const API = 'https://webmention.io/api';
const TOKEN = process.env.WEBMENTION_IO_TOKEN;

async function fetchWebmentions(since, perPage = 10000) {
    const fetch = (await import('node-fetch')).default;

    if (!domain) {
        console.warn(
            '>>> unable to fetch webmentions: no domain name specified in site.json'
        );
        return false;
    }

    if (!TOKEN) {
        console.warn(
            '>>> unable to fetch webmentions: no access token specified in environment.'
        );
        return false;
    }

    let url = `${API}/mentions.jf2?domain=${domain}&token=${TOKEN}&per-page=${perPage}`;
    if (since) url += `&since=${since}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const feed = await response.json();
            console.log(
                `>>> ${feed.children.length} new webmentions fetched from ${API}`
            );
            return feed;
        } else {
            console.error(`>>> Failed to fetch webmentions: ${response.statusText}`);
        }
    } catch (error) {
        console.error(`>>> Error during fetch: ${error.message}`);
    }

    return null;
}

// Merge fresh webmentions with cached entries, unique per id
function mergeWebmentions(a, b) {
    return unionBy(a.children, b.children, 'wm-id');
}

// Save combined webmentions in the cache file
function writeToCache(data) {
    const filePath = `${CACHE_DIR}/webmentions.json`;
    const fileContent = JSON.stringify(data, null, 2);
    if (!fs.existsSync(CACHE_DIR)) {
        fs.mkdirSync(CACHE_DIR);
    }
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) throw err;
        console.log(`>>> webmentions cached to ${filePath}`);
    });
}

// Get cache contents from json file
function readFromCache() {
    const filePath = `${CACHE_DIR}/webmentions.json`;

    if (fs.existsSync(filePath)) {
        const cacheFile = fs.readFileSync(filePath);
        const cachedWebmentions = JSON.parse(cacheFile);

        return {
            lastFetched: cachedWebmentions.lastFetched,
            children: cachedWebmentions.children,
        };
    }

    return {
        lastFetched: null,
        children: [],
    };
}

module.exports = async function () {
    const cache = readFromCache();

    if (cache.children.length) {
        console.log(`>>> ${cache.children.length} webmentions loaded from cache`);
    }

    if (process.env.NODE_ENV === 'production') {
    const feed = await fetchWebmentions(cache.lastFetched);
    if (feed) {
        const webmentions = {
            lastFetched: new Date().toISOString(),
            children: mergeWebmentions(cache, feed),
        };
        writeToCache(webmentions);
        return webmentions;
    }
    } else {
        console.log(">>> Skipping fetch, not in production environment.");
    }

};
