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


const scroll = new SmoothScroll('a[href*="#"]', {
    header: '#header',
    speedAsDuration: true,
    speed: 1500,
    easing: 'easeInOutQuint'
});


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


const tl = gsap.timeline();
window.addEventListener('load', () => {
    tl.to('.loading-inner', {
            opacity: 0,
            duration: 0.1,
            delay: 2,
            ease: 'power2.out'
        })
        .to('.loader', {
            display: 'none',
        })
        .to('.slideshow', {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        })
        .set('.catch-copy', {
            className: '+=reveal-text'
        })
        .to('.scroll-down', {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
        })
});


const iSObservers = document.querySelectorAll('.waypoint');
const options = {
    threshold: 0.3
};

const inView = (target) => {
    if (target.classList.contains('img-anim')) {
        target.classList.add('img-move');
    } else if (target.classList.contains('ttl-anim')) {
        target.classList.add('movingLetter');
    } else if (target.classList.contains('cont-img')) {
        target.classList.add('fadeIn');
    }
};

const observeUse = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            inView(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observeUse, options);
iSObservers.forEach(iSObserver => {
    observer.observe(iSObserver);
});
