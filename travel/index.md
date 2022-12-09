---
layout: travel-home
custom-title: Ivan Ludvig's Travel Blog
---

<div id="map" style="height: 480px; width: 100%;">
</div>

<script>
    var map = L.map('map', {attributionControl: false}).setView([51, 12], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const countries = [
        {
            name: 'Lanzarote', 
            coords: [29.04685, -13.58997], 
            link: '/travel/2022/07/22/lanzarote.html',
            minZoom: 9,
            cities: [
                {name: 'Arrecife', coords: [28.96516, -13.55503], link: '/travel/2022/07/22/lanzarote.html#Arrecife'},
                {name: 'Famara', coords: [29.11555, -13.55634], link: '/travel/2022/07/22/lanzarote.html#Famara'},
                {name: 'Costa Teguise', coords: [28.99811, -13.49296], link: '/travel/2022/07/22/lanzarote.html#Costa-Teguise'},
                {name: 'Puerto del Carmen', coords: [28.9228, -13.6681], link: '/travel/2022/07/22/lanzarote.html#Puerto-del-Carmen'},
                {name: 'Playa Blanca', coords: [28.86699, -13.83901], link: '/travel/2022/07/22/lanzarote.html#Playa-Blanca'},
            ]
        }
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


