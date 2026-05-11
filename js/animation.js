const IN_VIEW_CLASS = 'in-view';

window.animateOnViewObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
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
