---
layout: travel-home
custom-title: Ivan Ludvig's Travel Blog
description: My travels
---

<div id="map" style="height: 480px; width: 100%; margin-bottom: 36px; margin-top: -15px; border-radius: 6px;">
</div>

<script>
    const onClick = point => () => window.open(point.link);

    const renderCountry = (country) => {
        // zoom: zoom when rendering map component
        // countryZoom: min zoom to render place on global map 
        // minZoom: min zoom to render children on global map

        const marker = generateMarker(country, countryIcon, onClick);

        const citiesLayer = new L.LayerGroup();
        country.cities?.filter(city => city.name !== country.name && !cities[city.key]).forEach(city => 
            generateMarker(
                city, 
                country.nested ? countryIcon : cityIcon, 
                onClick
            ).addTo(citiesLayer)
        );

        const countryZoom = country.countryZoom ?? -1;
        const onZoom = () => {
            if (map.getZoom() >= countryZoom) {
                marker.addTo(map);
                if (map.getZoom() >= country.minZoom) {
                    map.addLayer(citiesLayer);

                    if (country.nested) {
                        map.removeLayer(marker);
                    }
                } else {
                    map.removeLayer(citiesLayer);
                }
            } else {
                map.removeLayer(marker);
                map.removeLayer(citiesLayer);
            }
        };

        onZoom();
        map.on('zoomend', onZoom);
    }

    const cityFliter = window.location.search.split('city=')[1];
    const countryFilter = window.location.search.split('country=')[1];
    if (cityFliter) {
        const placeName = Object.keys(places).find(key => key.toLowerCase() === cityFliter.toLowerCase());
        if(!placeName) {
            window.location.href = window.location.href.split('?')[0];
        }
        renderMap(`map`, places[placeName].coords, places[placeName]?.zoom ?? 8);
    } else if (countryFilter) {
        const maps = countryCodeToMaps[countryFilter].map(placeName => generatePlaceConfig(placeName, 1));
        const coords = maps.map(m => m.coords)
                        .reduce((a, b) => [a[0] + b[0], a[1] + b[1]])
                        .map(x => x / maps.length);
    
        var map = L.map('map', {attributionControl: false}).setView(coords, maps[0]?.zoom ?? 8);
        L.tileLayer(MAP_URL).addTo(map);
        maps.map(renderCountry);
    } else {
        var map = L.map('map', {attributionControl: false}).setView([52, 22], 3);
        L.tileLayer(MAP_URL).addTo(map);

        const countries = [
            generatePlaceConfig('Lanzarote', 9),
            generatePlaceConfig('Fuerteventura', 9),
            generatePlaceConfig('Kaliningrad', 6),
            generatePlaceConfig('Murmansk'),
            generatePlaceConfig('Malta-country', 9),
            generatePlaceConfig('Dubai'),
            generatePlaceConfig('Tallinn'),
            generatePlaceConfig('Around-Naples'),
            generatePlaceConfig('Scalea-Rome', 5),
            generatePlaceConfig('Around-Como', 7),
            generatePlaceConfig('Kazan'),
            generatePlaceConfig('Iran', 4),
            generatePlaceConfig('Istanbul'),
            generatePlaceConfig('Sochi', 7),
            generatePlaceConfig('Tula'),
            generatePlaceConfig('Turin', 8),
            generatePlaceConfig('Genoa'),
            generatePlaceConfig('Azure'),
            generatePlaceConfig('Budapest'),
            generatePlaceConfig('Athens'),
            generatePlaceConfig('Sicily-East', 6),
            generatePlaceConfig('South-Portugal', 6),
            generatePlaceConfig('North-Portugal', 6),
            generatePlaceConfig('Albania', 6),
            generatePlaceConfig('North-Macedonia', 6),
            generatePlaceConfig('Sofia'),
            generatePlaceConfig('Turkey-South', 6)
        ];

        countries.forEach(renderCountry);

        countries.forEach(country => {
            if (country.nested) {
                country.cities?.forEach(city => {
                    renderCountry({
                        ...generatePlaceConfig(city.key, city.minZoom ?? city.zoom),
                        countryZoom: country.minZoom
                    });
                });
            }
        });
    }
</script>


