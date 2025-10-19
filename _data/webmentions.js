const fs = require('fs');
const domain = 'www.johnpe.art';

// Load .env variables with dotenv
require('dotenv').config();

// Define Cache Location and API Endpoint
const CACHE_DIR = './_data';
const API = 'https://webmention.io/api';
const TOKEN = process.env.WEBMENTION_IO_TOKEN;

// Check if we're in serve or watch mode
function isDevMode() {
    return process.argv.includes('--serve') || process.argv.includes('--watch');
}

async function fetchWebmentions(since, perPage = 10000) {
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
    const seen = new Map();
    
    // Add all items, with later items overwriting earlier ones with the same id
    [...a.children, ...b.children].forEach(item => {
        seen.set(item['wm-id'], item);
    });
    
    return Array.from(seen.values());
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

// Deduplicate webmentions by wm-id
function deduplicateWebmentions(mentions) {
    const seen = new Map();
    mentions.forEach(item => {
        seen.set(item['wm-id'], item);
    });
    return Array.from(seen.values());
}

module.exports = async function () {
    const cache = readFromCache();

    if (cache.children.length) {
        console.log(`>>> ${cache.children.length} webmentions loaded from cache`);
    }

    // Only fetch new webmentions when NOT in dev mode
    if (isDevMode()) {
        console.log('>>> Skipping webmention fetch (in dev mode)');
        // Ensure cache is deduplicated before returning
        return {
            ...cache,
            children: deduplicateWebmentions(cache.children)
        };
    }

    const feed = await fetchWebmentions(cache.lastFetched);
    
    if (feed) {
        const webmentions = {
            lastFetched: new Date().toISOString(),
            children: mergeWebmentions(cache, feed),
        };
        writeToCache(webmentions);
        return webmentions;
    }

    // Ensure cache is deduplicated before returning
    return {
        ...cache,
        children: deduplicateWebmentions(cache.children)
    };
};