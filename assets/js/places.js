const places = {
    'Lanzarote': {
        name: 'Lanzarote',
        coords: [29.04685, -13.58997],
        link: '/travel/2022/07/22/lanzarote.html'
    },
    'Arrecife': {
        name: 'Arrecife',
        coords: [28.96516, -13.55503],
        link: '/travel/2022/07/22/lanzarote.html#Arrecife'
    },
    'Famara': {
        name: 'Famara',
        coords: [29.11555, -13.55634],
        link: '/travel/2022/07/22/lanzarote.html#Famara'
    },
    'Costa-Teguise': {
        name: 'Costa Teguise',
        coords: [28.99811, -13.49296],
        link: '/travel/2022/07/22/lanzarote.html#Costa-Teguise'
    },
    'Puerto-del-Carmen': {
        name: 'Puerto del Carmen',
        coords: [28.9228, -13.6681],
        link: '/travel/2022/07/22/lanzarote.html#Puerto-del-Carmen'
    },
    'Playa-Blanca': {
        name: 'Playa Blanca',
        coords: [28.86699, -13.83901],
        link: '/travel/2022/07/22/lanzarote.html#Playa-Blanca'
    },
    'Fuerteventura': {
        name: 'Fuerteventura',
        coords: [28.35874, -14.05367],
        link: '/travel/2022/07/26/fuerteventura.html'
    },
    'Corralejo': {
        name: 'Corralejo',
        coords: [28.72815, -13.86335],
        link: '/travel/2022/07/26/fuerteventura.html#Corralejo'
    },
    'Puerto-del-Rosario': {
        name: 'Puerto del Rosario',
        coords: [28.50082, -13.86283],
        link: '/travel/2022/07/26/fuerteventura.html#Puerto-del-Rosario'
    },
    'Kaliningrad': {
        name: 'Kaliningrad',
        coords: [54.70638, 20.51204],
        link: '/travel/2022/06/04/kaliningrad.html'
    },
    'Zelenogradsk': {
        name: 'Zelenogradsk',
        coords: [54.95986, 20.47509],
        link: '/travel/2022/06/04/kaliningrad.html#Zelenogradsk',
        zoom: 9
    },
    'Curonian-spit': {
        name: 'Curonian spit',
        coords: [55.22113, 20.90644],
        link: '/travel/2022/06/04/kaliningrad.html#Curonian-spit',
        zoom: 9
    },
}

const cities = {
    'Lanzarote': ['Arrecife', 'Famara', 'Costa-Teguise', 'Puerto-del-Carmen', 'Playa-Blanca'],
    'Fuerteventura': ['Corralejo', 'Puerto-del-Rosario'],
    'Kaliningrad': ['Zelenogradsk', 'Curonian-spit']
}

const generatePlaceConfig = (name, minZoom = 8) => ({
    ...places[name],
    minZoom,
    cities: cities[name].map(city => places[city])
})
