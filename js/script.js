const tl = gsap.timeline();

tl.to('.slideshow', {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power1.out'
    })
    .set('.catch-copy', {
        className: '+=reveal-text'
    })
    .to('.scroll-down', {
        opacity: 1,
        duration: 1,
        ease: 'power1.out'
    });
