---
layout: travel-home
custom-title: Ivan Ludvig's Travel Blog
---

<div id="map" style="height: 480px; width: 100%; margin-bottom: 36px; margin-top: -15px; border-radius: 6px;">
</div>

<script>
    const filter = window.location.search.split('city=')[1];
    if (filter) {
        const placeName = Object.keys(places).find(key => key.toLowerCase() === filter.toLowerCase());
        if(!placeName) {
            window.location.href = window.location.href.split('?')[0];
        }
        renderMap(`map`, places[placeName].coords, places[placeName]?.zoom ?? 8);
    } else {
        var map = L.map('map', {attributionControl: false}).setView([52, 22], 3);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        const countries = [
            generatePlaceConfig('Lanzarote', 8),
            generatePlaceConfig('Fuerteventura', 8),
            generatePlaceConfig('Kaliningrad', 5),
            generatePlaceConfig('Murmansk'),
            generatePlaceConfig('Malta', 9),
            generatePlaceConfig('Gozo', 9),
            generatePlaceConfig('Dubai'),
            generatePlaceConfig('Tallinn'),
            generatePlaceConfig('Naples'),
            generatePlaceConfig('Scalea-Rome', 4),
            generatePlaceConfig('Northern-Italy', 6),
            generatePlaceConfig('Kazan'),
            generatePlaceConfig('Iran', 3),
            generatePlaceConfig('Fethiye', 8),
            generatePlaceConfig('Antalya'),
            generatePlaceConfig('Istanbul'),
            generatePlaceConfig('Sochi', 6),
            generatePlaceConfig('Tula'),
            generatePlaceConfig('Turin', 7),
            generatePlaceConfig('Genoa'),
            generatePlaceConfig('Azure'),
            generatePlaceConfig('Budapest')
        ];

        const onClick = point => () => window.open(point.link);

        const renderCountry = (country) => {
            generateMarker(country, countryIcon, onClick).addTo(map);

            const citiesLayer = new L.LayerGroup();
            country.cities?.filter(city => city.name !== country.name).forEach(city => 
                generateMarker(city, cityIcon, onClick).addTo(citiesLayer)
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
    }
</script>


