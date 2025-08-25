places = {
    ...places,
    'Nice': {
        name: 'Nice',
        coords: [43.71017, 7.26195],
        link: '/travel/2023/nice',
        zoom: 7
    },
    'Cape-Martin': {
        name: 'Cape Martin',
        coords: [43.75077, 7.48388],
        link: '/travel/2023/menton#Cape-Martin',
        zoom: 11
    },
    'Menton': {
        name: 'Menton',
        coords: [43.77448, 7.49754],
        link: '/travel/2023/menton',
        zoom: 11
    },
    'Paris': {
        name: 'Paris',
        coords: [48.85754, 2.35137],
        link: '/travel/2025/paris',
        zoom: 6
    },
    'Lyon': {
        name: 'Lyon',
        coords: [45.76404, 4.83565],
        link: '/travel/2025/lyon',
        zoom: 6
    }
};

places['Azure-Menton'] = places['Cape-Martin'];
places['Azure'] = places['Nice'];

cites = {
    ...cities,
    'Azure': ['Nice', 'Monaco', 'Cape-Martin', 'Menton', 'Ventimiglia'],
    'Azure-Menton': ['Monaco', 'Cape-Martin', 'Menton', 'Ventimiglia'],
};
