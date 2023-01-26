const places = {
    'Lanzarote': {
        name: 'Lanzarote',
        coords: [29.04685, -13.58997],
        link: '/travel/2022/07/22/lanzarote.html'
    },
    'Arrecife': {
        name: 'Arrecife',
        coords: [28.96516, -13.55503],
        link: '/travel/2022/07/22/lanzarote.html#Arrecife'
    },
    'Famara': {
        name: 'Famara',
        coords: [29.11555, -13.55634],
        link: '/travel/2022/07/22/lanzarote.html#Famara'
    },
    'Costa-Teguise': {
        name: 'Costa Teguise',
        coords: [28.99811, -13.49296],
        link: '/travel/2022/07/22/lanzarote.html#Costa-Teguise'
    },
    'Puerto-del-Carmen': {
        name: 'Puerto del Carmen',
        coords: [28.9228, -13.6681],
        link: '/travel/2022/07/22/lanzarote.html#Puerto-del-Carmen'
    },
    'Playa-Blanca': {
        name: 'Playa Blanca',
        coords: [28.86699, -13.83901],
        link: '/travel/2022/07/22/lanzarote.html#Playa-Blanca'
    },
    'Fuerteventura': {
        name: 'Fuerteventura',
        coords: [28.35874, -14.05367],
        link: '/travel/2022/07/26/fuerteventura.html'
    },
    'Corralejo': {
        name: 'Corralejo',
        coords: [28.72815, -13.86335],
        link: '/travel/2022/07/26/fuerteventura.html#Corralejo'
    },
    'Puerto-del-Rosario': {
        name: 'Puerto del Rosario',
        coords: [28.50082, -13.86283],
        link: '/travel/2022/07/26/fuerteventura.html#Puerto-del-Rosario'
    },
    'Kaliningrad': {
        name: 'Калининград',
        coords: [54.70638, 20.51204],
        link: '/travel/2022/06/04/kaliningrad.html'
    },
    'Zelenogradsk': {
        name: 'Зеленоградск',
        coords: [54.95986, 20.47509],
        link: '/travel/2022/06/04/kaliningrad.html#Zelenogradsk',
        zoom: 9
    },
    'Curonian-spit': {
        name: 'Куршская Коса',
        coords: [55.22113, 20.90644],
        link: '/travel/2022/06/04/kaliningrad.html#Curonian-spit',
        zoom: 9
    },
    'Murmansk': {
        name: 'Мурманск',
        coords: [68.97331, 33.08558],
        link: '/travel/2022/10/14/murmansk.html',
        zoom: 5
    },
    'Malta': {
        name: 'Malta',
        coords: [35.8816, 14.44903],
        link: '/travel/2022/11/19/malta.html',
        zoom: 10
    },
    'Sliema': {
        name: 'Sliema',
        coords: [35.911, 14.5029],
        link: '/travel/2022/11/19/malta.html#Sliema',
        zoom: 11
    },
    'Valletta': {
        name: 'Valletta',
        coords: [35.8989, 14.51455],
        link: '/travel/2022/11/19/malta.html#Valletta',
        zoom: 11
    },
    'Mdina': {
        name: 'Mdina',
        coords: [35.88636, 14.40391],
        link: '/travel/2022/11/19/malta.html#Mdina',
        zoom: 11
    },
    'Gozo': {
        name: 'Gozo',
        coords: [36.04429, 14.25122],
        link: '/travel/2022/11/21/gozo.html',
        zoom: 11
    },
    'Cirkewwa': {
        name: 'Ċirkewwa',
        coords: [35.98777, 14.32861],
        link: '/travel/2022/11/21/gozo.html#Cirkewwa',
        zoom: 11
    },
    'Mgarr': {
        name: 'Mgarr',
        coords: [36.0258, 14.29937],
        link: '/travel/2022/11/21/gozo.html#Mgarr',
        zoom: 11
    },
    'Xewkija': {
        name: 'Xewkija',
        coords: [36.02992, 14.25994],
        link: '/travel/2022/11/21/gozo.html#Xewkija',
        zoom: 11
    },
    'Victoria': {
        name: 'Victoria',
        coords: [36.04268, 14.2425],
        link: '/travel/2022/11/21/gozo.html#Victoria',
        zoom: 11
    },
    'Ramla-Bay': {
        name: 'Ramla Bay',
        coords: [36.06146, 14.28411],
        link: '/travel/2022/11/21/gozo.html#Ramla-Bay',
        zoom: 11
    },
    'Dubai': {
        name: 'Dubai',
        coords: [25.20484, 55.27078],
        link: '/travel/2022/01/25/dubai.html',
        zoom: 8
    },
    'Tallinn': {
        name: 'Таллинн',
        coords: [59.43696, 24.75357],
        link: '/travel/2022/07/14/tallinn.html',
        zoom: 6
    }
}

const cities = {
    'Lanzarote': ['Arrecife', 'Famara', 'Costa-Teguise', 'Puerto-del-Carmen', 'Playa-Blanca'],
    'Fuerteventura': ['Corralejo', 'Puerto-del-Rosario'],
    'Kaliningrad': ['Kaliningrad', 'Zelenogradsk', 'Curonian-spit'],
    'Malta': ['Sliema', 'Valletta', 'Mdina', 'Cirkewwa'],
    'Gozo': ['Mgarr', 'Xewkija', 'Victoria', 'Ramla-Bay']
}

const generatePlaceConfig = (name, minZoom = 8) => ({
    ...places[name],
    minZoom,
    cities: cities[name]?.map(key => ({ ...places[key], key }))
})
