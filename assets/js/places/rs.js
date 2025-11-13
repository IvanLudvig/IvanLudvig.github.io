places = {
    ...places,
    'Belgrade': {
        name: 'Belgrade',
        coords: [44.81254, 20.46123],
        link: '/travel/2023/belgrade',
        zoom: 7
    },
    'Uzice': {
        name: 'Užice',
        coords: [43.85557, 19.84247],
        link: '/travel/2023/uzice',
        zoom: 7
    },
};

cities = {
    ...cities,
    'Serbia': ['Belgrade', 'Uzice']
};

places['Serbia'] = { ...generateCityMarker('Serbia'), nested: true };
