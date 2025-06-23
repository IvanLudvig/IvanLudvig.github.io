places = {
    ...places,
    'Iran': {
        name: 'Iran',
        coords: [32.4279, 53.68804],
        link: '/travel/2023/tehran',
        zoom: 3
    },
    'Tehran': {
        name: 'Tehran',
        coords: [35.72185, 51.33469],
        link: '/travel/2023/tehran',
        zoom: 5
    },
    'Isfahan': {
        name: 'Isfahan',
        coords: [32.65389, 51.66596],
        link: '/travel/2023/isfahan',
        zoom: 5
    },
    'Shiraz': {
        name: 'Shiraz',
        coords: [29.59261, 52.58356],
        link: '/travel/2023/shiraz',
        zoom: 6
    },
    'Persepolis': {
        name: 'Persepolis',
        coords: [29.93552, 52.89156],
        link: '/travel/2023/shiraz#Persepolis',
        zoom: 6
    },
    'Hormuz': {
        name: 'Hormuz',
        coords: [27.05927, 56.46079],
        link: '/travel/2023/hormuz#Hormuz',
        zoom: 7
    },
    'Bandar-Abbas': {
        name: 'Bandar Abbas',
        coords: [27.19625, 56.28836],
        link: '/travel/2023/hormuz',
        zoom: 7
    }
};

cities = {
    ...cities,
    'Iran': ['Tehran', 'Isfahan', 'Shiraz', 'Persepolis', 'Hormuz', 'Bandar-Abbas'],
    'Shiraz': ['Shiraz', 'Persepolis'],
    'Hormuz': ['Bandar-Abbas', 'Hormuz']
};

countryCodeToMaps['ir'] = ['Tehran', 'Isfahan', 'Shiraz', 'Hormuz'];
