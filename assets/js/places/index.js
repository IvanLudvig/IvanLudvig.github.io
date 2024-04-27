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

const countryCodeToMaps = {}
