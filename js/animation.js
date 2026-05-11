const IN_VIEW_CLASS = 'in-view';

if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported. Using scroll fallback.');

    const elements = document.querySelectorAll('.animateOnView');
    const checkVisibility = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (inView) {
                el.classList.add(IN_VIEW_CLASS);
            } else {
                el.classList.remove(IN_VIEW_CLASS);
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
} else {
    window.animateOnViewObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                console.log(`Element: ${entry.target}, IsIntersecting: ${entry.isIntersecting}`);
                if (entry.isIntersecting) {
                    entry.target.classList.add(IN_VIEW_CLASS);
                } else {
                    entry.target.classList.remove(IN_VIEW_CLASS);
                }
            });
        },
        {
            threshold: 0.25, // Trigger when 25% of the element is visible
        }
    );

    document.querySelectorAll('.animateOnView').forEach(el => window.animateOnViewObserver.observe(el));
}
