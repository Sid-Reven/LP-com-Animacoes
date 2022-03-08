gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-inicial-texto", {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.4 //tempo para cada elemento interno da classe
});

gsap.from(".animate-inicial-img", {
    duration: 0.8,
    opacity: 0,
    x: 250,
    // y:250
});

gsap.from(".animate-artigos", {
    duration: 0.8,
    opacity: 0,
    x: -100,
    stagger: 0.2,
    delay: 0.9
});

gsap.from(".animate-final",{
    scrollTrigger: ".animate-final",
    duration: 0.8,
    opacity: 0,
    y: -200,
    delay: 0.5,
    stagger: 0.3
});