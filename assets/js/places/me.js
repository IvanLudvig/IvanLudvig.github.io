places = {
    ...places,
    'Kotor': {
        name: 'Kotor',
        coords: [42.42466, 18.77123],
        link: '/travel/2025/montenegro#kotor',
        zoom: 8
    },
    'Budva': {
        name: 'Budva',
        coords: [42.29114, 18.84029],
        link: '/travel/2025/montenegro#budva',
        zoom: 8
    },
    'Bar': {
        name: 'Bar',
        coords: [42.09121, 19.0899],
        link: '/travel/2025/montenegro#bar',
        zoom: 8
    },
    'Herceg-Novi': {
        name: 'Herceg Novi',
        coords: [42.45724, 18.53147],
        link: '/travel/2025/montenegro#herceg-novi',
        zoom: 8
    },
    'Zabljak': {
        name: 'Žabljak',
        coords: [43.15498, 19.12074],
        link: '/travel/2025/durmitor',
        zoom: 7
    },
};

cities = {
    ...cities,
    'Montenegro': ['Zabljak', 'Kotor', 'Budva', 'Bar', 'Herceg-Novi'],
    'Montenegrin-Coast': ['Bar', 'Budva', 'Kotor', 'Herceg-Novi'],
};

places['Montenegro'] = { ...generateCityMarker('Montenegro'), nested: true };
places['Montenegrin-Coast'] = { ...generateCityMarker('Montenegrin-Coast'), zoom: 9 };
