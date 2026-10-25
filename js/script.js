// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
 document.body.classList .add('dark');
}

themeToggle?.addEventListener('click', () => {
 document.body.classList.toggle('dark');
 localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Copy code
function copyCode(btn) {
 const code = btn.closest('.example').querySelector('code').innerText;
 navigator.clipboard.writeText(code).then(() => {
 const original = btn.textContent;
 btn.textContent = 'Copied!';
 setTimeout(() => btn.textContent = original, 1500);
 });
}

// Demo runner
function runDemo() {
 const out = document.getElementById('demo-output');
 out.innerHTML = `<strong>Output:</strong> Hello, Developer!<br><small>Function executed successfully.</small>`;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
 e.preventDefault();
 const target = document.querySelector(this.getAttribute('href'));
 if (target) {
 target.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
 });
});

// Active sidebar highlight on scroll
const sections = document.querySelectorAll('.lesson');
const navLinks = document.querySelectorAll('.sidebar a');

window.addEventListener('scroll', () => {
 let current = '';
 sections.forEach(section => {
 const sectionTop = section.offsetTop;
 if (scrollY >= sectionTop - 120) {
 current = section.getAttribute('id');
 }
 });
 navLinks.forEach(link => {
 link.classList.remove('active');
 if (link.getAttribute('href') === `#${current}`) {
 link.classList.add('active');
 }
 });
});
