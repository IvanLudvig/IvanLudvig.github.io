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
    }
};

cities = {
    ...cities,
    'Around-Lisbon': ['Lisbon', 'Cascais'],
    'Rota-Vicentina': ['Porto-Covo', 'Vila-Nova-de-Milfontes', 'Almograve', 'Zambujeira-do-Mar', 'Odeceixe'],
    'South-Portugal': ['Around-Lisbon', 'Rota-Vicentina', 'Lagos', 'Faro']
};

places['Rota-Vicentina'] = generateCityMarker('Rota-Vicentina', 9, 8);
places['Around-Lisbon'] = { ...places['Lisbon'], minZoom: 7 };
places['South-Portugal'] = { ...generateCityMarker('South-Portugal'), nested: true };

