places = {
    ...places,
    'Ohrid': {
        name: 'Ohrid',
        coords: [41.12309, 20.80164],
        link: '/travel/2024/ohrid',
        zoom: 7
    },
    'Skopje': {
        name: 'Skopje',
        coords: [41.99812, 21.42543],
        link: '/travel/2024/skopje',
        zoom: 7
    }
};

cities = {
    ...cities,
    'North-Macedonia': ['Ohrid', 'Skopje']
};

places['North-Macedonia'] = { ...generateCityMarker('North-Macedonia'), nested: true };
