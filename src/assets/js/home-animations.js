// Base 11ty Template Animations

window.addEventListener('load', () => {
    // Hero section animations
    gsap.from("h1", { opacity: 0, y: 50, duration: 2, delay: 0.3, ease: "power3.out" });
    gsap.from("p", { opacity: 0, y: 50, duration: 2, delay: 0.3, ease: "power3.out" });
    gsap.from(".btn-primary", { opacity: 0, scale: 0.8, duration: 2, delay: 0.6, ease: "back.out(1.7)" });
});

gsap.registerPlugin(ScrollTrigger);

// Section animations
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-padding",
    start: "top 50%",
    toggleActions: "play none none none",
    // markers: true, // uncomment to debug
  },
  defaults: { duration: 1, ease: "power3.out" }
});

// Animate grid images: from bottom (y: 50 to y: 0)
tl.fromTo(
  ".grid > div",
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, stagger: 0.2 }
);

// Stats section animations
gsap.from(".section-padding .flex > div", {
  opacity: 0,
  y: 40,
  duration: 1.8,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".section-padding",
    start: "top 80%",
    toggleActions: "play none none none",
  }
});

// Icon animations in stats
gsap.from(".section-padding .flex > div svg", {
  scale: 0.6,
  opacity: 0,
  duration: 0.5,
  ease: "back.out(1.7)",
  stagger: 0.2,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".section-padding .flex",
    start: "top 50%",
    toggleActions: "play none none none",
  }
});

// Optional: Service card animations (uncomment if you have service cards)
/*
gsap.fromTo(
  ".service-card",
  { opacity: 0, scale: 0.95 },
  {
    opacity: 1,
    scale: 1,
    duration: 1.8,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".service-card",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  }
);
*/





// gsap.fromTo(
//   ".service-card",
//   { opacity: 0, scale: 0.95 },
//   {
//     opacity: 1,
//     scale: 1,
//     duration: 1.8,
//     ease: "power3.out",
//     stagger: 0.3,
//     scrollTrigger: {
//       trigger: ".service-card",
//       start: "top 75%",
//       toggleActions: "play none none none",
//     },
//   }
// );


// gsap.from(".home-testimonaials .grid > div", {
//   opacity: 0,
//   y: 40,
//   duration: 1.8,
//   ease: "power3.out",
//   stagger: 0.2,
//   scrollTrigger: {
//     trigger: ".home-testimonials",
//     start: "top 80%",
//     toggleActions: "play none none none",
//     // markers: true, // optional for debug
//   }
// });


// gsap.from(".home-testimonials .grid > div .w-12", {
//   scale: 0.6,
//   opacity: 0,
//   duration: 0.5,
//   ease: "back.out(1.7)",
//   stagger: 0.2,
//   delay: 0.3,
//   scrollTrigger: {
//     trigger: ".home-testimonials .grid",
//     start: "top 50%",
//     toggleActions: "play none none none",
//   }
// });