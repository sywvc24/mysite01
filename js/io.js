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
