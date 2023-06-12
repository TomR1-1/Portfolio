//Does the intro animation when you load the page

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".navbar", { opacity: 0 }, { zIndex: 10, opacity: 1, duration: 0.5 });
tl.fromTo(".content", { opacity: 0 }, { opacity: 0.8, duration: 0.5 }, "-=0.5");