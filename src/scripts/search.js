// Auto focus the search field
var FieldID = "searchBox"
document.getElementById(FieldID).focus();


async function loadIndex() {
    const res = await fetch('/search.json');
    return res.json();
}

function searchPosts(posts, query) {
    const q = query.toLowerCase().trim();
    if (q === '') return [];

    return posts.filter(p =>
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(q)) ||
        (p.collection && p.collection.toLowerCase().includes(q))
    );
}

function renderResults(results) {
    const list = document.getElementById('search-results');
    list.innerHTML = '';
    
    // Create and append the heading element
    const heading = document.createElement('h2');
    heading.className = 'key-value--heading';
    heading.textContent = 'Results';
    list.appendChild(heading);
    
    if (results.length === 0) {
        const input = document.getElementById('searchBox');
        if (input.value.trim() !== '') {
            const noResults = document.createElement('p');
            noResults.className = 'no-results';
            noResults.textContent = 'No results found';
            list.appendChild(noResults);
        }
        return;
    }
    
    results.forEach(post => {
        // Create the li element with classes
        const li = document.createElement('li');
        li.className = 'key-value--item key-value--with-image key-value--with-spacing';
        
        // Create the anchor element with its class and href
        const a = document.createElement('a');
        a.className = 'key-value--link';
        a.href = post.url;
        
        // Create the image element
        // const pImg = document.createElement('img');
        // pImg.className = 'key-value--image';
        // pImg.src = post.image;
        
        // Create the h3 element for the title
        const kvKey = document.createElement('p');
        // Note: using the same id for all posts isn't recommended; consider making this dynamic or removing it.
        kvKey.id = 'all-posts';
        kvKey.className = 'key-value--key';
        kvKey.textContent = post.title;
        
        // Create the paragraph element for the category
        const pExcerpt = document.createElement('p');
        pExcerpt.className = 'key-value--description';
        pExcerpt.textContent = post.excerpt;
        
        // Assemble the elements
        // a.appendChild(pImg);
        a.appendChild(kvKey);
        a.appendChild(pExcerpt);
        li.appendChild(a);
        list.appendChild(li);
    });
}



document.addEventListener('DOMContentLoaded', async () => {
    const posts = await loadIndex();
    const input = document.getElementById('searchBox');
    input.addEventListener('input', () => {
        const results = searchPosts(posts, input.value);
        renderResults(results);
    });
});