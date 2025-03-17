places = {
    ...places,
    'Tirana': {
        name: 'Tirana',
        coords: [41.32754, 19.81869],
        link: '/travel/2024/tirana',
        zoom: 8
    },
    'Vlora': {
        name: 'Vlorë',
        coords: [40.46606, 19.49135],
        link: '/travel/2024/vlora',
        zoom: 10
    },
    'Zvernec': {
        name: 'Zvërnec',
        coords: [40.51045, 19.41252],
        link: '/travel/2024/vlora#Zvernec',
        zoom: 12
    },
    'Himara': {
        name: 'Himarë',
        coords: [40.10347, 19.75023],
        link: '/travel/2024/himara',
        zoom: 10
    },
    'Dhermi': {
        name: 'Dhërmi',
        coords: [40.15096, 19.64161],
        link: '/travel/2024/himara#Dhermi',
        zoom: 12
    },
    'Berat': {
        name: 'Berat',
        coords: [40.70863, 19.94373],
        link: '/travel/2024/berat',
        zoom: 8
    },
    'Elbasan': {
        name: 'Elbasan',
        coords: [41.11138, 20.08226],
        link: '/travel/2024/berat',
        zoom: 8
    }
};

cities = {
    ...cities,
    'Vlora': ['Vlora', 'Zvernec'],
    'Himara': ['Himara', 'Dhermi'],
    'Berat': ['Berat', 'Elbasan'],
    'Albania': ['Tirana', 'Vlora', 'Himara', 'Berat']
};

places['Albania'] = { ...generateCityMarker('Albania'), nested: true };
