/**
 * scrollToSection.js
 * Scrolls a page section into view while respecting reduced motion.
 * @version 2026.10.21
 */
const scrollToSection = (id, prefersReducedMotion) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
};

export default scrollToSection;
