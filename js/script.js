const tl = gsap.timeline();

window.addEventListener('DOMContentLoaded', () => {
    tl.to('.h-inner', {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        })
        .to('.slideshow', {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        })
        .set('.catch-copy', {
            className: '+=reveal-text'
        })
        .to('.scroll-down', {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        })
});
