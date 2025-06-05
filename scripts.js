// Splash screen removal after fade out
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  setTimeout(() => {
    splash.style.display = 'none';
  }, 3500);
});

// Animate sections on scroll
const sections = document.querySelectorAll('main section');
function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkVisibility);
checkVisibility();

// Theme toggle with persistence
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'light' ? 'Dark Mode' : 'Light Mode';
  themeToggle.setAttribute('aria-pressed', savedTheme === 'light' ? 'true' : 'false');
} else {
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  themeToggle.textContent = prefersDark ? 'Light Mode' : 'Dark Mode';
  themeToggle.setAttribute('aria-pressed', prefersDark ? 'false' : 'true');
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = 'Dark Mode';
    themeToggle.setAttribute('aria-pressed', 'true');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = 'Light Mode';
    themeToggle.setAttribute('aria-pressed', 'false');
    localStorage.setItem('theme', 'dark');
  }
});

// Contact form validation & send mailto
const form = document.getElementById('contact-form');
const nameInput = form.elements['name'];
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const formMsg = document.getElementById('form-msg');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formMsg.textContent = '';

  if (!nameInput.value.trim()) {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  }
  if (!emailInput.value.trim()) {
    emailError.textContent = 'Please enter your email.';
    valid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }
  if (!messageInput.value.trim()) {
    messageError.textContent = 'Please enter a message.';
    valid = false;
  }

  if (valid) {
    const subject = encodeURIComponent(`Contact from ${nameInput.value.trim()}`);
    const body = encodeURIComponent(
      `Name: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
    );
    window.location.href = `mailto:wishes@example.com?subject=${subject}&body=${body}`;
    formMsg.textContent = 'Opening your email client...';
    form.reset();
  }
});
