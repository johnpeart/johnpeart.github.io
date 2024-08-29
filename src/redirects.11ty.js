class Redirects {
    data() {
        return {
            pagination: {
                data: 'collections.redirects',
                size: 1,
                alias: 'redirect',
                addAllPagesToCollections: true,
            },
                tags: 'page',
                layout: 'redirects.html',
                eleventyComputed: {
                permalink: ({ redirect }) => `${redirect.from}/index.html`,
            },
            eleventyExcludeFromCollections: true,
        };
    }
    
    render() {
    return null;
    }
}

module.exports = Redirects;