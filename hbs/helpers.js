const hbs = require('hbs');

// Helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) => {
    let words = text.split(' ');
    words.forEach((char, index) => {
        words[index] = char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
    });
    return words.join(' ');
});