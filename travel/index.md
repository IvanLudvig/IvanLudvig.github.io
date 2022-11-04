---
layout: travel-home
custom-title: Ivan Ludvig's Travel Blog
---

<div id="map" style="height: 480px; width: 100%;">
</div>

<script>
    var map = L.map('map', {attributionControl: false}).setView([51, 12], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const points = [
        {name: 'Arrecife', coords: [28.96516, -13.55503], link: '/travel/2022/07/22/lanzarote.html#Arrecife'},
        {name: 'Famara', coords: [29.11555, -13.55634], link: '/travel/2022/07/22/lanzarote.html#Famara'},
        {name: 'Costa Teguise', coords: [28.99811, -13.49296], link: '/travel/2022/07/22/lanzarote.html#Costa-Teguise'},
        {name: 'Puerto del Carmen', coords: [28.9228, -13.6681], link: '/travel/2022/07/22/lanzarote.html#Puerto-del-Carmen'},
        {name: 'Playa Blanca', coords: [28.86699, -13.83901], link: '/travel/2022/07/22/lanzarote.html#Playa-Blanca'},
    ];
    const onClick = point => () => window.open(point.link);
    points.map(point => L.marker(point.coords).addTo(map).bindPopup(point.name).on('click', onClick(point)));
</script>


