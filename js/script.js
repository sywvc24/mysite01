const tl = gsap.timeline();

tl.to('.h-inner', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    })
    .to('.slide-block', {
        width: 0,
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
    });
