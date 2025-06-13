// Typing effect for name
const nameText = "Suvam Naskar";
const nameElement = document.querySelector("header h1");
nameElement.textContent = "";
let index = 0;

const typeInterval = setInterval(() => {
    if (index < nameText.length) {
        nameElement.textContent += nameText[index];
        index++;
    } else {
        clearInterval(typeInterval);
        nameElement.classList.add("glow");
    }
}, 150);

// Nav links with neon hover flicker
gsap.from("header nav a", {
    duration: 1,
    opacity: 0,
    y: -30,
    stagger: 0.2,
    ease: "back.out(1.7)",
    onComplete: () => {
        document.querySelectorAll("header nav a").forEach(el => el.classList.add("glow"));
    }
});

// Image zoom + fade-in
gsap.from("main img", {
    duration: 2,
    opacity: 0,
    scale: 0.8,
    ease: "power2.out"
});

// Slide-in info
gsap.from("main .text-lg", {
    duration: 1.5,
    x: 100,
    opacity: 0,
    delay: 0.5,
    stagger: 0.3,
    ease: "power3.out"
});

// Flicker effect for quotes
gsap.from(".text-lg.mt-8", {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "sine.inOut",
    onStart: () => {
        document.querySelector(".text-lg.mt-8").classList.add("flicker", "glow");
    }
});

// Sections slide in with retro pop
gsap.from("section h2", {
    duration: 1,
    x: -50,
    opacity: 0,
    stagger: 0.4,
    ease: "power2.out"
});

// Scale-in cards
gsap.from("section > div > div", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 0.5,
    ease: "back.out(1.7)"
});

// Footer reveal
gsap.from("footer", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    delay: 1.2,
    ease: "power2.out"
});