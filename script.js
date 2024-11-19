var t1 = gsap.timeline();

t1.from(".navitem", {
  stagger: 0.3,
  duration: 2,
  delay: 5.5,
  y: 20,
  ease: "Expo.easeInOut",
  opacity: 0,
});
.from(
  "#smline",
  {
    with: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  },
  "-=2"
);

.from(
  ".leftitem",
  {
    stagger: 0.3,
    duration: 2,
    y: 20,
    ease: "Expo.easeInOut",
    opacity: 0,
  },
  "-=2"
);

.from(
  "#right img",
  {
    duration: 2,
    scale: 1.05,
    ease: "Expo.easeInOut",
    opacity: 0,
  },
  "-=2"
);
