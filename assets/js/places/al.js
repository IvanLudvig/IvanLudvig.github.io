places = {
    ...places,
    'Tirana': {
        name: 'Tirana',
        coords: [41.32754, 19.81869],
        link: '/travel/2024/tirana',
        zoom: 8
    },
    'Vlore': {
        name: 'Vlorë',
        coords: [40.46606, 19.49135],
        link: '/travel/2024/vlore',
        zoom: 10
    },
    'Zvernec': {
        name: 'Zvërnec',
        coords: [40.51045, 19.41252],
        link: '/travel/2024/vlore',
        zoom: 12
    },
    'Himare': {
        name: 'Himarë',
        coords: [40.10347, 19.75023],
        link: '/travel/2024/himare',
        zoom: 8
    },
    'Dhermi': {
        name: 'Dhërmi',
        coords: [40.15096, 19.64161],
        link: '/travel/2024/himare',
        zoom: 8
    },
    'Berat': {
        name: 'Berat',
        coords: [40.70863, 19.94373],
        link: '/travel/2024/berat',
        zoom: 8
    },
};

cities = {
    ...cities,
    'Vlore': ['Vlore', 'Zvernec'],
    'Himare': ['Himare', 'Dhermi'],
    'Albania': ['Tirana', 'Vlore', 'Himare', 'Berat']
};

places['Albania'] = { ...generateCityMarker('Albania'), nested: true };
