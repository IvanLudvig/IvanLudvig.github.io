function renderMap(containerId, coords, zoom = 5) {
    const map = L.map(containerId, { attributionControl: false }).setView(coords, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const icon = L.icon({
        iconUrl: '/assets/marker.svg',
        iconAnchor: [12, 32],
        iconSize: new L.Point(24, 32)
    });

    L.marker(coords, { icon }).addTo(map);
}

function renderCityMap(containerId, name, zoom = 5) {
    renderMap(containerId, places[name].coords, zoom);
}
