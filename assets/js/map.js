const countryIcon = L.icon({
    iconUrl: '/assets/marker.svg',
    iconAnchor: [12, 32],
    iconSize: new L.Point(24, 32)
});

const cityIcon = L.icon({
    iconUrl: '/assets/marker-city.svg',
    iconAnchor: [8, 24],
    iconSize: new L.Point(16, 24)
});

// const API_KEY = 'v_cYN-QAZtCxJsygjj7tVzjAvoPxVVPHDLngHtoH0kA';
// const MAP_URL = `https://api.mapy.cz/v1/maptiles/basic/256/{z}/{x}/{y}?lang=en&apikey=${API_KEY}`;
const MAP_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

function renderMap(containerId, coords, zoom = 5) {
    const map = L.map(containerId, { attributionControl: false }).setView(coords, zoom);
    L.tileLayer(MAP_URL).addTo(map);
    L.marker(coords, { icon: countryIcon }).addTo(map);
}

function renderCityMap(name) {
    renderMap(`${name}-map`, places[name].coords, places[name]?.zoom ?? 8);
}

const generateMarker = (point, icon, onClick) => L.marker(point.coords, { icon })
    .bindTooltip(point.name)
    .on('click', onClick(point));

function renderCountryMap(name, mapContainer) {
    const country = generatePlaceConfig(name);
    const map = L.map(mapContainer ? mapContainer : `${name}-country-map`, { attributionControl: false })
        .setView(country.coords, country?.zoom ?? 8);
    L.tileLayer(MAP_URL).addTo(map);

    const onClick = point => () => document.getElementById(point.key)
        .scrollIntoView({ behavior: 'smooth' });

    if (country.cities) {
        country.cities?.forEach(city =>
            generateMarker(city, cityIcon, onClick).addTo(map)
        );
    } else {
        generateMarker(country, cityIcon, () => { }).addTo(map)
    }
}
