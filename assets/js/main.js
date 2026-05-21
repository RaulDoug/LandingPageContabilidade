/* ------------------- HEADER ------------------- */
// Menu Lateral Mobile
window.initMenu = function () {
  const openBtn =  document.getElementById('menu-open-btn');
  const closeBtn = document.getElementById('menu-close-btn');
  const overlay = document.getElementById('overlay');
  const navBar = document.getElementById('nav-bar');

  const navLinks = document.querySelectorAll('.nav-bar a');

  let menuEnabled = false;

  const toggleNavBar = () => {
    navBar.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  const closeMenu = () => {
    navBar.classList.remove('active');
    overlay.classList.remove('active');
  };

  const handleMenu = () => {

    // DESKTOP
    if(window.innerWidth >= 1440) {

      navBar.classList.remove('active');
      overlay.classList.remove('active');

      if(menuEnabled) {
        openBtn.removeEventListener('click', toggleNavBar);
        closeBtn.removeEventListener('click', toggleNavBar);

        menuEnabled = false;
      }

      return;
    }

    // MOBILE/TABLET
    if(!menuEnabled) {
      openBtn.addEventListener('click', toggleNavBar);
      closeBtn.addEventListener('click', toggleNavBar);

      navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
      });

      menuEnabled = true;
    }

  };

  handleMenu();

  window.addEventListener('resize', handleMenu);


}

/* ------------------- ABOUT | SERVICES ------------------- */
// Ler mais
window.readMore = function () {
  function viewMore(btn, content, heightStart) {
      content.classList.toggle('active');

      if(content.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        btn.textContent = 'Ver menos';
      } else {
        content.style.maxHeight = heightStart;
        btn.textContent = 'Ver mais';
      }
  }

  // About
  const aboutBtn = document.getElementById('about-btn');
  const aboutDesc = document.querySelector('.about-desc');
  
  const aboutHeight = getComputedStyle(aboutDesc).maxHeight;

  aboutBtn.addEventListener('click', () => {
    viewMore(aboutBtn, aboutDesc, aboutHeight);
  });

  // Serices
  const serviceBtn = document.getElementById('service-btn');
  const serviceList = document.querySelector('.services-list');

  const serviceHeight = getComputedStyle(serviceList).maxHeight;

  serviceBtn.addEventListener('click', () => {
    viewMore(serviceBtn, serviceList, serviceHeight);
  });

  // Consult
  const consultBtn = document.getElementById('consult-btn');
  const consultList = document.querySelector('.consult-list');

  const consultHeight = getComputedStyle(consultList).maxHeight;

  consultBtn.addEventListener('click', () => {
    viewMore(consultBtn, consultList, consultHeight);
  });
}

/* ------------------- TESTIMONIALS ------------------- */
window.swipeTestimonials = function () {
  const testList =  document.querySelector('.test-list');
  const cards = document.querySelectorAll('.test-item');

  const nextBtn = document.querySelector('.arrow-right');
  const prevBtn = document.querySelector('.arrow-left');

  let currentIndex = 0

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(testList).gap) || 0;

    testList.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if(currentIndex < cards.length - 1){
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    updateSlider();
  })

  prevBtn.addEventListener('click', () => {
    if(currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = cards.length - 1;
    }

    updateSlider();
  })
}