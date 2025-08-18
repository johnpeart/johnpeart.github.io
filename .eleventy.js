// Redirects plugin
const redirectsPlugin = require('eleventy-plugin-redirects');

// Markdown processing
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function(eleventyConfig) {
    // Pass environment variables to templates
    eleventyConfig.addGlobalData("env", process.env);

    // Redirects plugin
    eleventyConfig.addPlugin(redirectsPlugin, {
        template: "clientSide",
    });

    // Configure markdown-it with options and plugins
    const markdownOptions = {
        html: true,
        breaks: true,
        typographer:  true,
    };

    const md = markdownIt(markdownOptions)
        .use(markdownItAttrs)
        .use(markdownItFootnote);

    // Custom footnote rendering rules
    md.renderer.rules.footnote_block_open = () => (
        '<div class="footnotes" role="doc-endnotes">\n' +
        '<h2 class="h3">Footnotes</h2>\n' +
        '<ol class="footnotes-list">\n'
    );

    // Custom footnote reference (e.g., replace the default [1] with 1)
    md.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
        const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

        return `<sup id="fnref${id}" role="doc-noteref" class="footnote"><a href="#fn${id}" class="footnote-link">${tokens[idx].meta.id + 1}</a></sup>`;
    };

    // Custom footnote anchor (i.e. the link that you click to 'go back');
    const footnoteAnchor = "&#8617;&#xfe0e;";
    md.renderer.rules.footnote_anchor = (tokens, idx, options, env, slf) => {
        const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

        return ` <a href="#fnref${id}" class="footnote-backref" role="doc-backlink">${footnoteAnchor}</a>`;
    };

    // Set markdown-it as the library for Markdown processing
    eleventyConfig.setLibrary("md", md);

    // Filter to render Markdown content
    eleventyConfig.addFilter("markdownify", (content) => {
        return md.render(content);
    });

    // Passthrough Copies
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/scripts");
    eleventyConfig.addPassthroughCopy("./src/robots.txt");
    eleventyConfig.addPassthroughCopy("./src/site.webmanifest");

    // Collection Names
    const collections = [
        "archive",
        "blogpost", 
        "feed",
        "game",
        "goal", 
        "list",
        "manual", 
        "music", 
        "note", 
        "now", 
        "page",
        "photo", 
        "podcast", 
        "reply", 
        "share", 
        "slides", 
        "weeknote"
    ];

    // Dynamically add collections
    collections.forEach(collection => {
        eleventyConfig.addCollection(collection, function(collectionApi) {
            return collectionApi.getFilteredByGlob(`./src/posts/${collection}/*.*`).sort((a, b) => b.date - a.date);
        });
    });

    // Collections to include in "siteMap"
    const includedInSiteMap = [
        "archive",
        "blogpost", 
        "feed",
        "game",
        "goal", 
        "list",
        "manual", 
        "music", 
        "note", 
        "now", 
        "page",
        "photo", 
        "podcast", 
        "reply", 
        "share", 
        "slides", 
        "weeknote"
    ];

    // Combined "allPosts" collection, sorted by date
    eleventyConfig.addCollection("sitemap", function(collectionApi) {
        return includedInSiteMap.flatMap(collection =>
            collectionApi.getFilteredByGlob(`./src/posts/${collection}/*.*`)
        ).sort((a, b) => b.date - a.date);
    });

    // Collections to include in "allPosts"
    const includedInAllPosts = [
        "archive",
        "blogpost", 
        "list", 
        "music", 
        "note",
        "photo", 
        "game", 
        "share", 
        "slides", 
        "weeknote"
    ];

    // Combined "allPosts" collection, sorted by date
    eleventyConfig.addCollection("allPosts", function(collectionApi) {
        return includedInAllPosts.flatMap(collection =>
            collectionApi.getFilteredByGlob(`./src/posts/${collection}/*.*`)
        ).sort((a, b) => b.date - a.date);
    });

    // Collections to include in "allPosts"
    const includedInSearchIndex = [
        "archive",
        "blogpost", 
        "game",
        "list",
        "manual", 
        "music", 
        "note", 
        "now", 
        "photo", 
        "podcast", 
        "slides", 
        "weeknote"
    ];

    // Combined "allPosts" collection, sorted by date
    eleventyConfig.addCollection("searchIndex", function(collectionApi) {
        return includedInSearchIndex.flatMap(collection =>
            collectionApi.getFilteredByGlob(`./src/posts/${collection}/*.*`)
        ).sort((a, b) => b.date - a.date);
    });
    
    eleventyConfig.addShortcode("openGraphScreenshotURL", function () {
        const is404 = this.page.url === "/404.html";
        const isHome = this.page.url === "/";
    
        const baseURL = is404
            ? "https://johnpe.art/social/error/index.html"
            : isHome
                ? "https://johnpe.art/social/index.html"
                : `https://johnpe.art/social${this.page.url}`;
    
        const encodedURL = encodeURIComponent(baseURL);
        const cacheKey = `_${new Date().valueOf()}`;
    
        return `https://v1.screenshot.11ty.dev/${encodedURL}/opengraph/${cacheKey}`;
    });


    return {
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid",
        dataTemplateEngine: "liquid",
        dir: {
            input: "src",
            includes: "../_includes",
            layouts: "../_includes/layouts",
            data: "../_data",
            output: "_site"
        },
    };
};
