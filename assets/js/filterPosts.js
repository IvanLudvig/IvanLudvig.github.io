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
