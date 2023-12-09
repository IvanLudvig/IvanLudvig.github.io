const filterPosts = () => {
    const filter = window.location.search.split('city=')[1];
    if (filter) {
        const ul = document.getElementById('travel-posts-list');
        const posts = ul.getElementsByTagName('li');
        [...posts].forEach(d => {
            if (!d.getAttribute('data-title').toLowerCase().includes(filter.toLowerCase())) {
                ul.removeChild(d);
            }
        });
    }
}
