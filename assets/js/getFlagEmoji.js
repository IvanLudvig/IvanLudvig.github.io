const getFlagEmoji = (countryCode) => {
    const countries = countryCode.split(',');
    const codePoints = countries.map(country =>
        country.toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt())
            .map(codePoint => String.fromCodePoint(codePoint))
            .join('')
    );
    return codePoints.join(' ');
};
