function swapElegant(element) {
    'use strict';
    // This function changes the letters in 'Elegant'

    // Easier to end the function than to vary interval length
    if (Math.random() > 0.08) {
        return;
    }

    // Adds a random combination of 313 and Ele to the string
    var createdString = [
        Math.random() > 0.5 ? 'E' : '3',
        Math.random() > 0.5 ? 'l' : '1',
        Math.random() > 0.5 ? 'e' : '3',
        'gant'
    ].join('');

    // Set html and data-text, so CSS based glitching works too
    $(element).html(createdString);
    $(element).attr('data-text', createdString);
}

$('.glitch').each(function () {
    'use strict';

    setInterval(swapElegant, 50, this);
});