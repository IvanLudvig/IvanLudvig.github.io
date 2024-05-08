places = {
    ...places,
    'Lisbon': {
        name: 'Lisbon',
        coords: [38.72225, -9.13933],
        link: '/travel/2024/lisbon',
        zoom: 6
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
        link: '/travel/2024/rota-vicentina',
        zoom: 9
    },
    'Almograve': {
        name: 'Almograve',
        coords: [37.65262, -8.79374],
        link: '/travel/2024/rota-vicentina',
        zoom: 9
    },
    'Zambujeira-do-Mar': {
        name: 'Zambujeira do Mar',
        coords: [37.52548, -8.78395],
        link: '/travel/2024/rota-vicentina',
        zoom: 9
    },
    'Odeceixe': {
        name: 'Odeceixe',
        coords: [37.43283, -8.77162],
        link: '/travel/2024/rota-vicentina',
        zoom: 9
    }
};

cities = {
    ...cities,
    'Rota-Vicentina': ['Porto-Covo', 'Vila-Nova-de-Milfontes', 'Almograve', 'Zambujeira-do-Mar', 'Odeceixe']
};

places['Rota-Vicentina'] = generateCityMarker('Rota-Vicentina');
