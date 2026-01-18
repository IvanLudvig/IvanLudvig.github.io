const filterPosts = () => {
    const cityFilter = window.location.search.split('city=')[1];
    const ul = document.getElementById('travel-posts-list');
    if (ul) {
        const posts = ul.getElementsByTagName('li');
        if (cityFilter) {
            [...posts].forEach(d => {
                if (!d.getAttribute('data-cities').toLowerCase().split(', ').includes(cityFilter.toLowerCase())) {
                    ul.removeChild(d);
                }
            });
        }

        const countryFilter = window.location.search.split('country=')[1];
        if (countryFilter) {
            [...posts].forEach(d => {
                if (!d.getAttribute('data-country').toLowerCase().includes(countryFilter.toLowerCase())) {
                    ul.removeChild(d);
                }
            });
        }
    }
}

// Country filter button functionality
document.addEventListener('DOMContentLoaded', () => {
    const countryButtons = document.querySelectorAll('.country-btn');
    const posts = document.querySelectorAll('#travel-posts-list > li');
    
    countryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedCountry = btn.getAttribute('data-country');
            
            // Update active state
            countryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter posts
            posts.forEach(post => {
                const postCountries = post.getAttribute('data-country');
                
                if (selectedCountry === 'all' || postCountries.includes(selectedCountry)) {
                    post.style.display = '';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});
