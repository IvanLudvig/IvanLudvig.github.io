let places = {
    'Dubai': {
        name: 'Dubai',
        coords: [25.20484, 55.27078],
        link: '/travel/2022/dubai',
        zoom: 8
    },
    'Tallinn': {
        name: 'Таллинн',
        coords: [59.43696, 24.75357],
        link: '/travel/2022/tallinn',
        zoom: 6
    },
    'Lugano': {
        name: 'Lugano',
        coords: [46.00367, 8.95105],
        link: '/travel/2022/lugano',
        zoom: 6
    },
    'Nice': {
        name: 'Nice',
        coords: [43.71017, 7.26195],
        link: '/travel/2023/nice',
        zoom: 7
    },
    'Monaco': {
        name: 'Monaco',
        coords: [43.73841, 7.42461],
        link: '/travel/2023/monaco',
        zoom: 11
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
    'Ventimiglia': {
        name: 'Ventimiglia',
        coords: [43.79123, 7.60758],
        link: '/travel/2023/menton#Ventimiglia',
        zoom: 11
    },
    'Budapest': {
        name: 'Budapest',
        coords: [47.4995, 19.04667],
        link: '/travel/2023/budapest',
        zoom: 7
    },
    'Athens': {
        name: 'Athens',
        coords: [37.9838, 23.72753],
        link: '/travel/2023/athens',
        zoom: 7
    },
    'Sofia': {
        name: 'Sofia',
        coords: [42.6977, 23.32186],
        link: '/travel/2024/sofia',
        zoom: 6
    },
    'Krakow': {
        name: 'Krakow',
        coords: [50.06189, 19.93854],
        link: '/travel/2024/krakow',
        zoom: 6
    },
    'Wroclaw': {
        name: 'Wrocław',
        coords: [51.11004, 17.03199],
        link: '/travel/2024/wroclaw',
        zoom: 6
    },
    'Bratislava': {
        name: 'Bratislava',
        coords: [48.14859, 17.10774],
        link: '/travel/2024/bratislava',
        zoom: 6
    },
    'Bratislava': {
        name: 'Bratislava',
        coords: [48.14859, 17.10774],
        link: '/travel/2024/bratislava',
        zoom: 7
    },
    'Vienna': {
        name: 'Vienna',
        coords: [48.20806, 16.3713],
        link: '/travel/2024/vienna',
        zoom: 7
    },
    'Minsk': {
        name: 'Minsk',
        coords: [53.9006, 27.55897],
        link: '/travel/2018/minsk',
        zoom: 4
    }
};

places['Azure-Menton'] = places['Cape-Martin'];
places['Azure'] = places['Nice'];

let cities = {
    'Azure': ['Nice', 'Monaco', 'Cape-Martin', 'Menton', 'Ventimiglia'],
    'Azure-Menton': ['Monaco', 'Cape-Martin', 'Menton', 'Ventimiglia'],
}

const generatePlaceConfig = (name, minZoom = 8) => ({
    ...places[name],
    minZoom,
    cities: cities[name]?.map(key => ({ ...places[key], key }))
})

const generateCityMarker = (name, zoom, minZoom) => {
    const children = cities[name].map(x => places[x]);
    const coords = children.map(m => m.coords)
        .reduce((a, b) => [a[0] + b[0], a[1] + b[1]])
        .map(x => x / children.length);
    return {
        ...children[0],
        name: name.replace('-', ' '),
        coords,
        zoom: zoom ?? children[0].zoom,
        minZoom: minZoom ?? children[0].zoom
    };
};

const countryCodeToMaps = {}
