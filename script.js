// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 1 });

// Download CV Button Animation
const downloadBtn = document.querySelector(".btn");

if (downloadBtn) {
  // Hover animation
  downloadBtn.addEventListener("mouseenter", () => {
    gsap.to(downloadBtn, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  downloadBtn.addEventListener("mouseleave", () => {
    gsap.to(downloadBtn, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  // Click animation
  downloadBtn.addEventListener("click", () => {
    gsap.to(downloadBtn, {
      scale: 0.9,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  });
}

// About Section
gsap.from(".about", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
});

// GSAP Animation for About Me Section
gsap.from(".logo", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 0.5,
  ease: "power2.out",
});
gsap.from(".nav-links li", {
  opacity: 0,
  x: 50,
  duration: 1,
  stagger: 0.2, // Stagger animation for each link
  delay: 0.8,
  ease: "power2.out",
});
ScrollTrigger.create({
  trigger: "body",
  start: "top top",
  end: "bottom bottom",
  onUpdate: (self) => {
    if (self.direction === 1) {
      // Scrolling down
      gsap.to("nav", {
        backgroundColor: "#222", // Darker background
        duration: 0.3,
      });
    } else if (self.direction === -1) {
      // Scrolling up
      gsap.to("nav", {
        backgroundColor: "#333", // Original background
        duration: 0.3,
      });
    }
  }
});

gsap.utils.toArray('.social-icons a').forEach(icon => {
  gsap.fromTo(icon, {
      rotation: 180,
      opacity: 1,
      y: 50
  }, {
      rotation: 0,
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: icon
  });
});

// Tools Section
gsap.from(".tools-buttons", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".tools",
    start: "top 80%",
  },
});

// Profile Picture Animation
gsap.from(".profile-pic", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 0.5,
  ease: "power2.out",
});

gsap.from(".tools-content", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".tools",
    start: "top 80%",
  },
});

// Work Section
// GSAP Animation for My Work Section
gsap.from(".work-card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.7, // Delay between each card
  scrollTrigger: {
    trigger: ".work",
    start: "top 80%", // Start animation when the section is 80% in view
  },
});

// Contact Section
gsap.from(".contact form", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
});

// Falling Ball Animation
const ballPath = [
  { x: 0, y: 0 }, // Start at the top center
  { x: 50, y: 100 }, // Swing to the right
  { x: -50, y: 200 }, // Swing to the left
  { x: 30, y: 300 }, // Swing to the right
  { x: -30, y: 400 }, // Swing to the left
  { x: 0, y: 500 }, // End at the bottom center
];

// Animate the ball along the path
gsap.to(".falling-ball", {
  duration: 5, // Adjust duration for slower/faster animation
  ease: "power1.inOut",
  motionPath: {
    path: ballPath,
    curviness: 1.5, // Add smooth curves to the path
    autoRotate: true, // Rotate the ball naturally along the path
  },
  repeat: -1, // Loop the animation indefinitely
  yoyo: true, // Reverse the animation on each loop
});

// Get buttons and lists
const showLanguagesButton = document.getElementById("show-languages");
const showFrameworksButton = document.getElementById("show-frameworks");

const languagesList = document.getElementById("languages-list");
const frameworksList = document.getElementById("frameworks-list");

// Function to toggle visibility of content
function toggleContent(contentToShow, buttonToActivate) {
  // Hide both content sections
  languagesList.classList.remove("active");
  frameworksList.classList.remove("active");

  // Deactivate both buttons
  showLanguagesButton.classList.remove("active");
  showFrameworksButton.classList.remove("active");

  // Show the selected content section and activate the button
  contentToShow.classList.add("active");
  buttonToActivate.classList.add("active");
}

// Event listeners for buttons
showLanguagesButton.addEventListener("click", () => {
  toggleContent(languagesList, showLanguagesButton);
});

showFrameworksButton.addEventListener("click", () => {
  toggleContent(frameworksList, showFrameworksButton);
});

// Initially display languages
toggleContent(languagesList, showLanguagesButton);
