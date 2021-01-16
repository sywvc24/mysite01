const tl = gsap.timeline();

tl.to(".slideshow", {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
    })
    .set(".catch-copy", {
        className: "+=reveal-text"
    })
    .to(".scroll-down", {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    });
