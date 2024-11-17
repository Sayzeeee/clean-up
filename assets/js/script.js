// Initialisation des animations AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1000, // Durée des animations en ms
        easing: "ease-in-out",
        once: true, // Animation se déclenche une seule fois
    });

    // Animation GSAP sur le titre principal
    gsap.from("#header", {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: "bounce",
    });

    // Animation des liens de navigation
    gsap.from(".nav-link", {
        duration: 1,
        opacity: 0,
        y: -20,
        stagger: 0.2,
    });

    // Animation pour les formulaires (contact.html)
    if (document.querySelector("#contact-form")) {
        gsap.from("#contact-form", {
            duration: 1.5,
            opacity: 0,
            scale: 0.8,
            ease: "elastic",
        });
    }
});
