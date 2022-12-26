---
layout: travel-home
custom-title: Ivan Ludvig's Travel Blog
---

<div id="map" style="height: 480px; width: 100%; margin-bottom: 36px; margin-top: -15px;">
</div>

<script>
    var map = L.map('map', {attributionControl: false}).setView([51, 12], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const countries = [
        generatePlaceConfig('Lanzarote', 8),
        generatePlaceConfig('Fuerteventura', 8)
    ];

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
    const onClick = point => () => window.open(point.link);
    const generateMarker = (point, icon) => L.marker(point.coords, {icon})
                                            .bindTooltip(point.name)
                                            .on('click', onClick(point));

    const renderCountry = (country) => {
        generateMarker(country, countryIcon).addTo(map);

        const citiesLayer = new L.LayerGroup();
        country.cities.forEach(city => 
            generateMarker(city, cityIcon).addTo(citiesLayer)
        );

        map.on('zoomend', () => {
            if (map.getZoom() > country.minZoom){
                map.addLayer(citiesLayer);
            } else {
                map.removeLayer(citiesLayer);
            }
        });
    }

    countries.forEach(renderCountry);

</script>


