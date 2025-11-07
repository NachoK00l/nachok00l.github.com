document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    fetch('/blog/posts.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.status);
            }
            return response.json();
        })
        .then(posts => {
            console.log('Loaded posts array:', posts);
            console.log('Posts length:', Array.isArray(posts) ? posts.length : 'Not an array');
            blogGrid.innerHTML = '';
            if (Array.isArray(posts) && posts.length > 0) {
                posts.forEach((post, idx) => {
                    console.log('Creating card for post:', post);
                    const card = document.createElement('div');
                    card.className = 'blog-card animateOnView';
                    card.innerHTML = `
                        <h2>${post.title}</h2>
                        <p class="blog-date">${post.date}</p>
                        <p class="blog-summary">${post.description}</p>
                        <a href="${post.url}" class="primary-button">Read More</a>
                    `;
                    blogGrid.appendChild(card);
                    if (window.animateOnViewObserver) {
                        window.animateOnViewObserver.observe(card);
                    }
                });
            } else {
                blogGrid.innerHTML = '<p>No blog posts found.</p>';
            }
        })
        .catch(err => {
            console.error('Error loading blog posts:', err);
            blogGrid.innerHTML = '<p>Failed to load blog posts.</p>';
        });
});