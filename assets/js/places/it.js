places = {
    ...places,
    'Milan': {
        name: 'Milan',
        coords: [45.4642, 9.18998],
        link: '/travel/2022/milan',
        zoom: 6
    },
    'Naples': {
        name: 'Naples',
        coords: [40.85177, 14.26812],
        link: '/travel/?city=naples',
        zoom: 6
    },
    'Rome': {
        name: 'Rome',
        coords: [41.90278, 12.49636],
        link: '/travel/2025/rome',
        zoom: 6
    },
    'Scalea': {
        name: 'Scalea',
        coords: [39.81411, 15.79126],
        link: '/travel/?city=scalea',
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
    'Goja-del-Pis': {
        name: 'Goja del Pis',
        coords: [45.12875, 7.39885],
        link: '/travel/2023/gojadelpis#Goja-del-Pis-1',
        zoom: 10.5
    },
    'Almese': {
        name: 'Almese',
        coords: [45.11737, 7.39507],
        link: '/travel/2023/gojadelpis#Almese',
        zoom: 11
    },
    'Avigliana': {
        name: 'Avigliana',
        coords: [45.08507, 7.40091],
        link: '/travel/2023/gojadelpis#Avigliana',
        zoom: 11
    },
    'Genoa': {
        name: 'Genoa',
        coords: [44.40564, 8.94625],
        link: '/travel/2023/genoa',
        zoom: 6
    },
    'Turin': {
        name: 'Turin',
        coords: [45.07031, 7.68685],
        link: '/travel/2023/turin',
        zoom: 7
    },
    'Catania': {
        name: 'Catania',
        coords: [37.50382, 15.09013],
        link: '/travel/2023/catania',
        zoom: 7
    },
    'Syracuse': {
        name: 'Syracuse',
        coords: [37.07547, 15.28658],
        link: '/travel/2023/syracuse',
        zoom: 7
    },
    'Etna': {
        name: 'Etna',
        coords: [37.751, 14.99343],
        link: '/travel/2023/etna',
        zoom: 7
    },
    'Pompeii': {
        name: 'Pompeii',
        coords: [40.75121, 14.48867],
        link: '/travel/2024/pompeii',
        zoom: 9
    },
    'Path-of-the-Gods': {
        name: 'Path of the Gods',
        coords: [40.62509, 14.53475],
        link: '/travel/2024/amalfi',
        zoom: 8
    },
    'Positano': {
        name: 'Positano',
        coords: [40.62948, 14.48234],
        link: '/travel/2024/amalfi',
        zoom: 8
    },
    'Sorrento': {
        name: 'Sorrento',
        coords: [40.62639, 14.37641],
        link: '/travel/2024/amalfi',
        zoom: 8
    },
    'Bardonecchia': {
        name: 'Bardonecchia',
        coords: [45.07555, 6.70356],
        link: '/travel/2024/lac-vert',
        zoom: 12
    },
    'Lac-Vert': {
        name: 'Lac Vert',
        coords: [45.07978, 6.61534],
        link: '/travel/2024/lac-vert',
        zoom: 12
    },
    'Florence': {
        name: 'Florence',
        coords: [43.77138, 11.25581],
        link: '/travel/2025/firenze',
        zoom: 6
    },
    'Sori': {
        name: 'Sori',
        coords: [44.37198, 9.10192],
        link: '/travel/2025/liguria',
        zoom: 11
    },
    'Camogli': {
        name: 'Camogli',
        coords: [44.34761, 9.15695],
        link: '/travel/2025/liguria',
        zoom: 11
    },
    'St-Margherita': {
        name: 'St Margherita Ligure',
        coords: [44.33475, 9.21332],
        link: '/travel/2025/liguria',
        zoom: 11
    },
    'Portofino': {
        name: 'Portofino',
        coords: [44.30315, 9.20978],
        link: '/travel/2025/liguria',
        zoom: 11
    },
    'Zoagli': {
        name: 'Zoagli',
        coords: [44.33974, 9.26824],
        link: '/travel/2025/liguria',
        zoom: 11
    },
    'Sestri-Levante': {
        name: 'Sestri Levante',
        coords: [44.27269, 9.40945],
        link: '/travel/2025/liguria',
        zoom: 11
    }
};

places['Turin-1'] = places['Turin'];
places['Around-Como'] = places['Como'];
places['Goja-del-Pis-1'] = places['Goja-del-Pis'];
places['Scalea-Rome'] = places['Scalea'];
places['Sicily-East'] = places['Catania'];

cities = {
    ...cities,
    'Around-Como': ['Lugano', 'Varenna', 'Menaggio', 'Como'],
    'Como': ['Varenna', 'Menaggio', 'Como'],
    'Scalea-Rome': ['Rome', 'Scalea'],
    'Turin': ['Goja-del-Pis', 'Almese', 'Avigliana'],
    'Sicily-East': ['Catania', 'Syracuse', 'Etna'],
    'Amalfi': ['Path-of-the-Gods', 'Positano', 'Sorrento'],
    'Around-Naples': ['Naples', 'Pompeii', 'Amalfi'],
    'Lac-Vert': ['Bardonecchia', 'Lac-Vert'],
    'Liguria': ['Sori', 'Camogli', 'St-Margherita', 'Portofino', 'Zoagli', 'Sestri-Levante']
};

places['Amalfi'] = generateCityMarker('Amalfi', 11, 11);
places['Around-Naples'] = { ...places['Naples'], nested: true };
places['Liguria'] = generateCityMarker('Liguria', 10, 11);

