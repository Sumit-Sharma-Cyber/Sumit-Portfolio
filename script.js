// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Typewriter effect
const phrases = [
  "I specialize in penetration testing, network analysis, and threat hunting.",
  "Tools: Kali Linux · Wireshark · Metasploit · Burp Suite · Python",
  "Open to internships & junior roles in cybersecurity."
];
const el = document.getElementById("typewriter");
let pIndex = 0, charIndex = 0, forward = true;

function typeLoop() {
  const current = phrases[pIndex];
  if (forward) {
    el.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      forward = false;
      setTimeout(typeLoop, 1000);
      return;
    }
  } else {
    el.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      forward = true;
      pIndex = (pIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, forward ? 35 : 25);
}
typeLoop();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) window.scrollTo({ top: target.offsetTop - 20, behavior: "smooth" });
  });
});
