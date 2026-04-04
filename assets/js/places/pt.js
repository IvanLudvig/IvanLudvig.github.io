places = {
    ...places,
    'Lisbon': {
        name: 'Lisbon',
        coords: [38.72225, -9.13933],
        link: '/travel/2024/lisbon',
        zoom: 6
    },
    'Cascais': {
        name: 'Cascais',
        coords: [38.69705, -9.42229],
        link: '/travel/2024/cascais',
        zoom: 9
    },
    'Porto-Covo': {
        name: 'Porto Covo',
        coords: [37.85111, -8.79312],
        link: '/travel/2024/rota-vicentina',
        zoom: 9
    },
    'Vila-Nova-de-Milfontes': {
        name: 'Vila Nova de Milfontes',
        coords: [37.724, -8.78175],
        link: '/travel/2024/rota-vicentina#Vila-Nova-de-Milfontes',
        zoom: 9
    },
    'Almograve': {
        name: 'Almograve',
        coords: [37.65262, -8.79374],
        link: '/travel/2024/rota-vicentina#Almograve',
        zoom: 9
    },
    'Zambujeira-do-Mar': {
        name: 'Zambujeira do Mar',
        coords: [37.52548, -8.78395],
        link: '/travel/2024/rota-vicentina#Zambujeira-do-Mar',
        zoom: 9
    },
    'Odeceixe': {
        name: 'Odeceixe',
        coords: [37.43283, -8.77162],
        link: '/travel/2024/rota-vicentina#Odeceixe',
        zoom: 9
    },
    'Lagos': {
        name: 'Lagos',
        coords: [37.10278, -8.67302],
        link: '/travel/2024/lagos',
        zoom: 8
    },
    'Faro': {
        name: 'Faro',
        coords: [37.01646, -7.93519],
        link: '/travel/2024/faro',
        zoom: 8
    },
    'Praia-de-Faro': {
        name: 'Praia de Faro',
        coords: [37.00821, -7.99472],
        link: '/travel/2024/faro',
        zoom: 12
    },
    'Porto': {
        name: 'Porto',
        coords: [41.15794, -8.6291],
        link: '/travel/2024/porto',
        zoom: 8
    },
    'Braga': {
        name: 'Braga',
        coords: [41.54544, -8.4265],
        link: '/travel/2024/braga',
        zoom: 8
    },
    'Ponta-Delgada': {
        name: 'Ponta Delgada',
        coords: [37.73942, -25.66867],
        link: '/travel/2025/sao-miguel#Ponta-Delgada',
        zoom: 10
    },
    'Sete-Cidades': {
        name: 'Sete Cidades',
        coords: [37.85894, -25.79449],
        link: '/travel/2025/sao-miguel#Sete-Cidades',
        zoom: 10
    },
    'Mosteiros': {
        name: 'Mosteiros',
        coords: [37.89043, -25.82075],
        link: '/travel/2025/sao-miguel#Mosteiros',
        zoom: 10
    },
    'Vila-Franca': {
        name: 'Vila Franca do Campo',
        coords: [37.71564, -25.43445],
        link: '/travel/2025/sao-miguel#Vila-Franca',
        zoom: 10
    },
    'Furnas': {
        name: 'Furnas',
        coords: [37.77606, -25.31042],
        link: '/travel/2025/sao-miguel#Furnas',
        zoom: 10
    }
};

cities = {
    ...cities,
    'Around-Lisbon': ['Lisbon', 'Cascais'],
    'Rota-Vicentina': ['Porto-Covo', 'Vila-Nova-de-Milfontes', 'Almograve', 'Zambujeira-do-Mar', 'Odeceixe'],
    'South-Portugal': ['Around-Lisbon', 'Rota-Vicentina', 'Lagos', 'Faro'],
    'North-Portugal': ['Porto', 'Braga'],
    'Sao-Miguel': ['Ponta-Delgada', 'Sete-Cidades', 'Mosteiros', 'Vila-Franca', 'Furnas']
};

places['Rota-Vicentina'] = generateCityMarker('Rota-Vicentina', 9, 8);
places['Around-Lisbon'] = { ...places['Lisbon'], minZoom: 7 };
places['South-Portugal'] = { ...generateCityMarker('South-Portugal'), nested: true };
places['North-Portugal'] = { ...generateCityMarker('North-Portugal'), nested: true };
places['Sao-Miguel'] = { ...generateCityMarker('Sao-Miguel', 10, 9), link: '/travel/2025/sao-miguel' };
