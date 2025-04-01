document.addEventListener('DOMContentLoaded', () => {
    // Lazy load backgrounds 
    const lazyloadBackgrounds = document.querySelectorAll('.profile-card:not(.e-lazyloaded)');
    const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('e-lazyloaded');
                lazyloadBackgroundObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '200px 0px 200px 0px' });

    lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
    });

    // Toggle content visibility
    const profileCards = document.querySelectorAll('.profile-card');
    
    profileCards.forEach(card => {
        const showMoreBtn = card.querySelector('.show-more');
        const showLessBtn = card.querySelector('.show-less');
        const detailsArea = card.querySelector('.details-area');

        if (showMoreBtn && showLessBtn && detailsArea) {
            showMoreBtn.addEventListener('click', (event) => {
                event.preventDefault();
                showMoreBtn.classList.add('content-hide');
                showLessBtn.classList.remove('content-hide');
                detailsArea.classList.remove('content-hide');
            });

            showLessBtn.addEventListener('click', (event) => {
                event.preventDefault();
                showLessBtn.classList.add('content-hide');
                showMoreBtn.classList.remove('content-hide');
                detailsArea.classList.add('content-hide');
            });
        }
    });
});