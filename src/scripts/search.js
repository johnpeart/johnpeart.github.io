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
        
        if (post.image != null) {
            li.className = 'key-value--item key-value--search key-value--with-image key-value--with-spacing key-value--' + post.imageStyle;
        } else {
            li.className = 'key-value--item key-value--search key-value--with-spacing';
        }
        
        // Create the anchor element with its class and href
        const a = document.createElement('a');
        a.className = 'key-value--link key-value--card-link';
        a.href = post.url;
        
        if (post.image != null) {
            // Create the image element
            const postImage = document.createElement('img');
            postImage.className = 'key-value--image key-value--' + post.imageStyle;
            postImage.src = post.image;
            
            // Append child
            a.appendChild(postImage);
        }
        
        // Create the title element
        const postTitle = document.createElement('p');
        // Note: using the same id for all posts isn't recommended; consider making this dynamic or removing it.
        postTitle.id = 'all-posts';
        postTitle.className = 'key-value--key';
        postTitle.textContent = post.title;
        
        // Create the paragraph element for the excerpt
        const pExcerpt = document.createElement('p');
        pExcerpt.className = 'key-value--description';
        pExcerpt.textContent = post.excerpt;
        postTitle.textContent = post.title;
        
        // Create the paragraph element for the collection
        const pCollection = document.createElement('p');
        pCollection.className = 'key-value--label';
        pCollection.textContent = post.collection;
        
        // Assemble the elements
        a.appendChild(pCollection);
        a.appendChild(postTitle);
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