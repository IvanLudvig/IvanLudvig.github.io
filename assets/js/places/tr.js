places = {
    ...places,
    'Fethiye': {
        name: 'Fethiye',
        coords: [36.62183, 29.11512],
        link: '/travel/?city=fethiye',
        zoom: 6
    },
    'Oludeniz': {
        name: 'Ölüdeniz',
        coords: [36.54659, 29.12269],
        link: '/travel/2023/fethiye#Oludeniz',
        zoom: 11
    },
    'Babadag': {
        name: 'Babadağ',
        coords: [36.52833, 29.185],
        link: '/travel/2023/fethiye#Babadag',
        zoom: 11
    },
    'Antalya': {
        name: 'Antalya',
        coords: [36.89689, 30.71332],
        link: '/travel/?city=antalya',
        zoom: 6
    },
    'Istanbul': {
        name: 'Istanbul',
        coords: [41.00823, 28.97835],
        link: '/travel/2023/istanbul',
        zoom: 6
    },
    'Alanya': {
        name: 'Alanya',
        coords: [36.54444, 31.9954],
        link: '/travel/2024/turkey',
        zoom: 6
    }
};

cities = {
    ...cities,
    'Fethiye': ['Fethiye', 'Oludeniz', 'Babadag'],
    'Turkey-South': ['Alanya', 'Antalya', 'Fethiye']
};
places['Turkey-South'] = { ...generateCityMarker('Turkey-South'), nested: true };

