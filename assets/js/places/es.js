places = {
    ...places,
    'Lanzarote': {
        name: 'Lanzarote',
        coords: [29.04685, -13.58997],
        link: '/travel/2022/lanzarote',
        zoom: 9
    },
    'Arrecife': {
        name: 'Arrecife',
        coords: [28.96516, -13.55503],
        link: '/travel/2022/lanzarote#Arrecife'
    },
    'Famara': {
        name: 'Famara',
        coords: [29.11555, -13.55634],
        link: '/travel/2022/lanzarote#Famara'
    },
    'Costa-Teguise': {
        name: 'Costa Teguise',
        coords: [28.99811, -13.49296],
        link: '/travel/2022/lanzarote#Costa-Teguise'
    },
    'Puerto-del-Carmen': {
        name: 'Puerto del Carmen',
        coords: [28.9228, -13.6681],
        link: '/travel/2022/lanzarote#Puerto-del-Carmen'
    },
    'Playa-Blanca': {
        name: 'Playa Blanca',
        coords: [28.86699, -13.83901],
        link: '/travel/2022/lanzarote#Playa-Blanca'
    },
    'Fuerteventura': {
        name: 'Fuerteventura',
        coords: [28.35874, -14.05367],
        link: '/travel/2022/fuerteventura',
        zoom: 9
    },
    'Corralejo': {
        name: 'Corralejo',
        coords: [28.72815, -13.86335],
        link: '/travel/2022/fuerteventura#Corralejo'
    },
    'Puerto-del-Rosario': {
        name: 'Puerto del Rosario',
        coords: [28.50082, -13.86283],
        link: '/travel/2022/fuerteventura#Puerto-del-Rosario'
    },
    'Las-Palmas': {
        name: 'Las Palmas',
        coords: [28.1259, -15.4263],
        link: '/travel/2024/las-palmas',
        zoom: 10
    },
    'Maspalomas': {
        name: 'Maspalomas',
        coords: [27.7576, -15.5962],
        link: '/travel/2024/las-palmas#Maspalomas',
        zoom: 10
    }
};

cities = {
    ...cities,
    'Lanzarote': ['Arrecife', 'Famara', 'Costa-Teguise', 'Puerto-del-Carmen', 'Playa-Blanca'],
    'Fuerteventura': ['Corralejo', 'Puerto-del-Rosario'],
    'Gran-Canaria': ['Las-Palmas', 'Maspalomas']
};

places['Gran-Canaria'] = { ...generateCityMarker('Gran-Canaria'), nested: false, zoom: 9 };
