const places = {
    'Lanzarote': {
        name: 'Lanzarote',
        coords: [29.04685, -13.58997],
        link: '/travel/2022/lanzarote',
        zoom: 9
    },
    'Arrecife': {
        name: 'Arrecife',
        coords: [28.96516, -13.55503],
        link: '/travel/2022/lanzarote#Arrecife'
    },
    'Famara': {
        name: 'Famara',
        coords: [29.11555, -13.55634],
        link: '/travel/2022/lanzarote#Famara'
    },
    'Costa-Teguise': {
        name: 'Costa Teguise',
        coords: [28.99811, -13.49296],
        link: '/travel/2022/lanzarote#Costa-Teguise'
    },
    'Puerto-del-Carmen': {
        name: 'Puerto del Carmen',
        coords: [28.9228, -13.6681],
        link: '/travel/2022/lanzarote#Puerto-del-Carmen'
    },
    'Playa-Blanca': {
        name: 'Playa Blanca',
        coords: [28.86699, -13.83901],
        link: '/travel/2022/lanzarote#Playa-Blanca'
    },
    'Fuerteventura': {
        name: 'Fuerteventura',
        coords: [28.35874, -14.05367],
        link: '/travel/2022/fuerteventura',
        zoom: 9
    },
    'Corralejo': {
        name: 'Corralejo',
        coords: [28.72815, -13.86335],
        link: '/travel/2022/fuerteventura#Corralejo'
    },
    'Puerto-del-Rosario': {
        name: 'Puerto del Rosario',
        coords: [28.50082, -13.86283],
        link: '/travel/2022/fuerteventura#Puerto-del-Rosario'
    },
    'Kaliningrad': {
        name: 'Калининград',
        coords: [54.70638, 20.51204],
        link: '/travel/2022/kaliningrad'
    },
    'Zelenogradsk': {
        name: 'Зеленоградск',
        coords: [54.95986, 20.47509],
        link: '/travel/2022/kaliningrad#Zelenogradsk',
        zoom: 9
    },
    'Curonian-spit': {
        name: 'Куршская Коса',
        coords: [55.22113, 20.90644],
        link: '/travel/2022/kaliningrad#Curonian-spit',
        zoom: 9
    },
    'Murmansk': {
        name: 'Мурманск',
        coords: [68.97331, 33.08558],
        link: '/travel/2022/murmansk',
        zoom: 5
    },
    'Malta': {
        name: 'Malta',
        coords: [35.8816, 14.44903],
        link: '/travel/2022/malta',
        zoom: 10
    },
    'Sliema': {
        name: 'Sliema',
        coords: [35.911, 14.5029],
        link: '/travel/2022/malta#Sliema',
        zoom: 11
    },
    'Valletta': {
        name: 'Valletta',
        coords: [35.8989, 14.51455],
        link: '/travel/2022/malta#Valletta',
        zoom: 11
    },
    'Mdina': {
        name: 'Mdina',
        coords: [35.88636, 14.40391],
        link: '/travel/2022/malta#Mdina',
        zoom: 11
    },
    'St-Julians': {
        name: 'St Julians',
        coords: [35.91812, 14.48834],
        link: '/travel/2022/malta#St-Julians',
        zoom: 11
    },
    'Gozo': {
        name: 'Gozo',
        coords: [36.04429, 14.25122],
        link: '/travel/2022/gozo',
        zoom: 11
    },
    'Cirkewwa': {
        name: 'Ċirkewwa',
        coords: [35.98777, 14.32861],
        link: '/travel/2022/gozo#Cirkewwa',
        zoom: 11
    },
    'Mgarr': {
        name: 'Mgarr',
        coords: [36.0258, 14.29937],
        link: '/travel/2022/gozo#Mgarr',
        zoom: 11
    },
    'Xewkija': {
        name: 'Xewkija',
        coords: [36.02992, 14.25994],
        link: '/travel/2022/gozo#Xewkija',
        zoom: 11
    },
    'Victoria': {
        name: 'Victoria',
        coords: [36.04268, 14.2425],
        link: '/travel/2022/gozo#Victoria',
        zoom: 11
    },
    'Ramla-Bay': {
        name: 'Ramla Bay',
        coords: [36.06146, 14.28411],
        link: '/travel/2022/gozo#Ramla-Bay',
        zoom: 11
    },
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
    'Milan': {
        name: 'Milan',
        coords: [45.4642, 9.18998],
        link: '/travel/2022/milan',
        zoom: 6
    },
    'Naples': {
        name: 'Naples',
        coords: [40.85177, 14.26812],
        link: '/travel/2022/naples',
        zoom: 6
    },
    'Rome': {
        name: 'Rome',
        coords: [41.90278, 12.49636],
        link: '/travel/2022/scalea#Rome',
        zoom: 6
    },
    'Scalea': {
        name: 'Scalea',
        coords: [39.81411, 15.79126],
        link: '/travel/2022/scalea',
        zoom: 6
    },
    'Varenna': {
        name: 'Varenna',
        coords: [46.00909, 9.28511],
        link: '/travel/2022/como',
        zoom: 8
    },
    'Menaggio': {
        name: 'Menaggio',
        coords: [46.0217, 9.23882],
        link: '/travel/2022/como',
        zoom: 8
    },
    'Como': {
        name: 'Como',
        coords: [45.80805, 9.08517],
        link: '/travel/2022/como',
        zoom: 9
    },
    'Lugano': {
        name: 'Lugano',
        coords: [46.00367, 8.95105],
        link: '/travel/2022/lugano',
        zoom: 6
    },
    'Kazan': {
        name: 'Казань',
        coords: [55.78789, 49.12332],
        link: '/travel/2022/kazan',
        zoom: 5
    },
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
    },
    'Svetlogorsk': {
        name: 'Светлогорск',
        coords: [54.94407, 20.14663],
        link: '/travel/2023/svetlogorsk',
        zoom: 9
    },
    'Pionersky': {
        name: 'Пионерский',
        coords: [54.94968, 20.22451],
        link: '/travel/2023/svetlogorsk#Pionersky',
        zoom: 9
    },
    'Fethiye': {
        name: 'Fethiye',
        coords: [36.62183, 29.11512],
        link: '/travel/2023/fethiye',
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
        link: '/travel/2023/antalya',
        zoom: 6
    },
    'Istanbul': {
        name: 'Istanbul',
        coords: [41.00823, 28.97835],
        link: '/travel/2023/istanbul',
        zoom: 6
    }
}

places['Scalea-1'] = places['Scalea']
places['Fethiye-1'] = places['Fethiye']
places['Northern-Italy'] = places['Milan']

const cities = {
    'Lanzarote': ['Arrecife', 'Famara', 'Costa-Teguise', 'Puerto-del-Carmen', 'Playa-Blanca'],
    'Fuerteventura': ['Corralejo', 'Puerto-del-Rosario'],
    'Kaliningrad': ['Kaliningrad', 'Zelenogradsk', 'Curonian-spit', 'Svetlogorsk', 'Pionersky'],
    'Malta': ['Sliema', 'Valletta', 'Mdina', 'Cirkewwa', 'St-Julians'],
    'Gozo': ['Mgarr', 'Xewkija', 'Victoria', 'Ramla-Bay'],
    'Scalea': ['Rome', 'Scalea'],
    'Como': ['Varenna', 'Menaggio', 'Como'],
    'Northern-Italy': ['Milan', 'Lugano', 'Varenna', 'Menaggio', 'Como'],
    'Iran': ['Tehran', 'Isfahan', 'Shiraz', 'Persepolis', 'Hormuz', 'Bandar-Abbas'],
    'Shiraz': ['Shiraz', 'Persepolis'],
    'Hormuz': ['Bandar-Abbas', 'Hormuz'],
    'Fethiye': ['Fethiye', 'Oludeniz', 'Babadag']
}

const generatePlaceConfig = (name, minZoom = 8) => ({
    ...places[name],
    minZoom,
    cities: cities[name]?.map(key => ({ ...places[key], key }))
})
