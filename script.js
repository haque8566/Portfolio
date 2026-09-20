// Mobile navigation menu toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Close menu on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });
}

// Copy email address to clipboard
const copyEmailBtn = document.getElementById('copy-email-btn');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    const email = 'mdinzamamulhhaque@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const originalHtml = copyEmailBtn.innerHTML;
      copyEmailBtn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i>';
      setTimeout(() => {
        copyEmailBtn.innerHTML = originalHtml;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy email:', err);
    });
  });
}

// Highlight active navbar link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset + 120;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    let sectionId = current.getAttribute('id');
    if (sectionId === 'skills' || sectionId === 'projects') {
      sectionId = 'experience';
    }
    const navItem = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

    if (navItem) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItem.classList.add('active');
      } else {
        navItem.classList.remove('active');
      }
    }
  });
});
