places = {
    ...places,
    'Limassol': {
        name: 'Limassol',
        coords: [34.67863, 33.0413],
        link: '/travel/2024/limassol',
        zoom: 9
    },
    'Paphos': {
        name: 'Paphos',
        coords: [34.77539, 32.42177],
        link: '/travel/2024/limassol#Paphos',
        zoom: 9
    },
    'Aphrodites-Rock': {
        name: "Aphrodite's Rock",
        coords: [34.66354, 32.62718],
        link: '/travel/2024/limassol#Aphrodites-Rock',
        zoom: 9
    },
    'Nicosia': {
        name: 'Nicosia',
        coords: [35.17455, 33.36416],
        link: '/travel/2024/nicosia',
        zoom: 14
    },
    'Girne': {
        name: 'Girne',
        coords: [35.33228, 33.31954],
        link: '/travel/2024/north-cyprus#Girne',
        zoom: 9
    },
    'Omodos': {
        name: 'Omodos',
        coords: [34.84892, 32.80778],
        link: '/travel/2024/rural-cyprus#Omodos',
        zoom: 9
    },
    'Pano-Lefkara': {
        name: 'Pano Lefkara',
        coords: [34.86735, 33.30533],
        link: '/travel/2024/rural-cyprus#Pano-Lefkara',
        zoom: 9
    },
    'Episkopeio': {
        name: 'Episkopeio',
        coords: [35.04257, 33.23778],
        link: '/travel/2024/rural-cyprus#Episkopeo',
        zoom: 9
    },
    'Larnaca': {
        name: 'Larnaca',
        coords: [34.91822, 33.62006],
        link: '/travel/2022/larnaca',
        zoom: 9
    }
};

cities = {
    ...cities,
    'Limassol-Paphos': ['Limassol', 'Paphos', 'Aphrodites-Rock'],
    'Cyprus': ['Limassol', 'Paphos', 'Aphrodites-Rock', 'Nicosia', 'Girne', 'Omodos', 'Pano-Lefkara', 'Larnaca'],
    'North-Cyprus': ['Nicosia', 'Girne']
};


places['Limassol-Paphos'] = {
    ...generateCityMarker('Limassol-Paphos'),
    nested: false,
    zoom: 9
};

places['North-Cyprus'] = {
    ...generateCityMarker('North-Cyprus'),
    zoom: 9
};

countryCodeToMaps['cy'] = ['Cyprus'];
places['Cyprus'] = {
    ...generateCityMarker('Cyprus'),
    link: '/travel?country=cy',
    nested: true
};
