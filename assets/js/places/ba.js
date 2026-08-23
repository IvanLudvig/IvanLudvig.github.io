places = {
    ...places,
    'Trebinje': {
        name: 'Trebinje',
        coords: [42.7111, 18.3444],
        link: '/travel/2025/bih',
        zoom: 6
    },
    'Mostar': {
        name: 'Mostar',
        coords: [43.3425, 17.8375],
        link: '/travel/2025/bih',
        zoom: 6
    },
    'Sarajevo': {
        name: 'Sarajevo',
        coords: [43.8563, 18.4131],
        link: '/travel/2025/bih',
        zoom: 6
    },
    'Banja-Luka': {
        name: 'Banja Luka',
        coords: [44.7722, 17.191],
        link: '/travel/2025/bih',
        zoom: 6
    },
};

cities = {
    ...cities,
    'BiH': ['Trebinje', 'Mostar', 'Sarajevo', 'Banja-Luka']
};

places['BiH'] = { ...generateCityMarker('BiH'), nested: true };
