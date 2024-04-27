places = {
    ...places,
    'Malta': {
        name: 'Malta',
        coords: [35.8816, 14.44903],
        link: '/travel?country=mt',
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
        link: '/travel/?city=valletta',
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
    'Golden-Bay': {
        name: 'Golden Bay',
        coords: [35.93386, 14.34446],
        link: '/travel/2023/golden-bay',
        zoom: 11
    },
    'Birzebbuga': {
        name: 'Birżebbuġa',
        coords: [35.82653, 14.52784],
        link: '/travel/2023/marsaxlokk',
        zoom: 11
    },
    'Marsaxlokk': {
        name: 'Marsaxlokk',
        coords: [35.8422, 14.54277],
        link: '/travel/2023/marsaxlokk',
        zoom: 11
    },
    'St-Peters-Pool': {
        name: 'St. Peter\'s Pool',
        coords: [35.83312, 14.56211],
        link: '/travel/2023/marsaxlokk',
        zoom: 12
    },
    'Senglea': {
        name: 'Senglea',
        coords: [35.88788, 14.51674],
        link: '/travel/2023/senglea',
        zoom: 12
    },
};

places['Malta-2022'] = places['Malta'];
places['Around-Marsaxlokk'] = places['Marsaxlokk'];
places['Around-Senglea'] = places['Senglea'];

cities = {
    ...cities,
    'Malta': ['Sliema', 'Valletta', 'Mdina', 'Cirkewwa', 'St-Julians', 'Golden-Bay', 'Birzebbuga', 'Marsaxlokk', 'St-Peters-Pool', 'Senglea'],
    'Malta-2022': ['Sliema', 'Valletta', 'Mdina', 'Cirkewwa', 'St-Julians'],
    'Gozo': ['Mgarr', 'Xewkija', 'Victoria', 'Ramla-Bay'],
    'Around-Marsaxlokk': ['Birzebbuga', 'Marsaxlokk', 'St-Peters-Pool'],
    'Around-Senglea': ['Senglea', 'Valletta'],
};

countryCodeToMaps['mt'] = ['Malta', 'Gozo'];
