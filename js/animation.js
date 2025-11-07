const IN_VIEW_CLASS = 'in-view';

window.animateOnViewObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(IN_VIEW_CLASS);
            entry.target.style.animation = '';
        } else {
            entry.target.classList.remove(IN_VIEW_CLASS);
            entry.target.style.animation = 'none';
        }
    });
});

document.querySelectorAll('.animateOnView').forEach(el => window.animateOnViewObserver.observe(el));
