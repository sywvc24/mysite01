/**
 * drawer
 *
 */
const body = document.body;
const hamburger = document.getElementById('js-hamburger');
const blackBg = document.getElementById('js-black-bg');
const menuList = document.getElementById('indexList');

hamburger.addEventListener('click', (e) => {
    body.classList.toggle('nav-open');
});

blackBg.addEventListener('click', (e) => {
    body.classList.remove('nav-open');
});

menuList.addEventListener('click', (e) => {
    if (body.classList.contains('nav-open')) {
        body.classList.remove('nav-open');
    }
});


/**
 * smooth-scroll
 *
 */
const scroll = new SmoothScroll('a[href*="#"]', {
    header: '#header',
    speedAsDuration: true,
    speed: 1500,
    easing: 'easeInOutQuint'
});


/**
 * hover
 *
 */
const touch = 'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            const styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
