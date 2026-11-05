/**
 * BOTS RADIO & STREAM · VICENTE LÓPEZ
 * Quiet Luxury Audiovisual Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* ==========================================================================
     1. INTRO LOADER (LOGO LATIENDO POR 2 SEGUNDOS)
     ========================================================================== */
  const introLoader = document.getElementById('introLoader');
  const introProgressFill = document.getElementById('introProgressFill');
  const btnSkipIntro = document.getElementById('btnSkipIntro');
  let introDismissed = false;

  function dismissIntro() {
    if (introDismissed) return;
    introDismissed = true;

    if (introLoader) {
      introLoader.classList.add('fade-out');
      document.body.classList.remove('loading');

      // Animación en cascada de las líneas del título (izquierda / derecha alternadas)
      if (window.gsap) {
        document.body.classList.add('gsap-active');
        const tl = gsap.timeline({ delay: 0.1 });

        // Estado inicial
        gsap.set('.line-from-left', { x: -80, opacity: 0 });
        gsap.set('.line-from-right', { x: 80, opacity: 0 });
        gsap.set('.hero-subtext', { y: 20, opacity: 0 });
        gsap.set('.hero-cinema-wrapper', { opacity: 0, y: 35 });

        // 1. "El canal de" (sale de la izquierda)
        tl.to('.line-1', { x: 0, opacity: 1, duration: 0.75, ease: 'power3.out' })
          // 2. "streaming" (sale de la derecha)
          .to('.line-2', { x: 0, opacity: 1, duration: 0.75, ease: 'power3.out' }, '-=0.5')
          // 3. "donde vos" (sale de la izquierda)
          .to('.line-3', { x: 0, opacity: 1, duration: 0.75, ease: 'power3.out' }, '-=0.5')
          // 4. "elegís qué mirar." (ambas líneas juntas desde la derecha)
          .to('.line-4', { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
          // Subtítulo
          .to('.hero-subtext', { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out' }, '-=0.35')
          // Cuadro de video bajado con espacio negro
          .to('.hero-cinema-wrapper', { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }, '-=0.4');
      }

      // Remove loader from DOM after transition
      setTimeout(() => {
        if (introLoader.parentNode) {
          introLoader.parentNode.removeChild(introLoader);
        }
      }, 900);
    }
  }

  // Trigger progress fill
  if (introProgressFill) {
    setTimeout(() => {
      introProgressFill.style.width = '100%';
    }, 50);
  }

  // Auto dismiss after 2.0 seconds
  const introTimer = setTimeout(dismissIntro, 2000);

  if (btnSkipIntro) {
    btnSkipIntro.addEventListener('click', () => {
      clearTimeout(introTimer);
      dismissIntro();
    });
  }


  /* ==========================================================================
     2. DYNAMIC SCHEDULE & LIVE STATUS (BUENOS AIRES UTC-3)
     ========================================================================== */
  const headerLiveText = document.getElementById('headerLiveText');
  const cinemaLiveStatus = document.getElementById('cinemaLiveStatus');
  const hudDynamicShowTitle = document.getElementById('hudDynamicShowTitle');
  const hudDynamicShowSchedule = document.getElementById('hudDynamicShowSchedule');
  const heroCurrentShowLabel = document.getElementById('heroCurrentShowLabel');

  const shows = [
    {
      id: 'peligro',
      name: 'PELIGRO VOS ELEGÍS',
      day: 3, // Miércoles
      dayName: 'Miércoles',
      startHour: 19,
      endHour: 21,
      timeStr: 'Miércoles de 19:00 a 21:00 hs',
      banner: 'assets/miniaturas/show-peligro.webp'
    },
    {
      id: 'fdt',
      name: 'FALTA DE TODO',
      day: 4, // Jueves
      dayName: 'Jueves',
      startHour: 19,
      endHour: 21,
      timeStr: 'Jueves de 19:00 a 21:00 hs',
      banner: 'assets/miniaturas/show-falta-de-todo.webp'
    },
    {
      id: 'lapromo',
      name: 'LA PROMOCIÓN',
      day: 5, // Viernes
      dayName: 'Viernes',
      startHour: 19,
      endHour: 21,
      timeStr: 'Viernes de 19:00 a 21:00 hs',
      banner: 'assets/miniaturas/show-la-promocion.webp'
    },
    {
      id: 'masalla',
      name: 'ESTAMOS MÁS ALLÁ',
      day: 0, // Domingo
      dayName: 'Domingos',
      startHour: 15,
      endHour: 17,
      timeStr: 'Domingos de 15:00 a 17:00 hs',
      banner: 'assets/miniaturas/show-estamos-mas-alla.webp'
    }
  ];

  function getBuenosAiresDate() {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Argentina/Buenos_Aires',
      hour12: false,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });

    const parts = formatter.formatToParts(now);
    const dateObj = {};
    parts.forEach(p => dateObj[p.type] = parseInt(p.value, 10));

    const dayOfWeek = new Date(now.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).getDay();
    return {
      dayOfWeek,
      hour: dateObj.hour,
      minute: dateObj.minute
    };
  }

  function updateLiveInfo() {
    const ba = getBuenosAiresDate();

    // Check if live now
    let liveShow = null;
    for (const s of shows) {
      if (s.day === ba.dayOfWeek && ba.hour >= s.startHour && ba.hour < s.endHour) {
        liveShow = s;
        break;
      }
    }

    if (liveShow) {
      if (headerLiveText) headerLiveText.textContent = 'EN VIVO AHORA';
      if (cinemaLiveStatus) cinemaLiveStatus.textContent = 'En Vivo';
      if (hudDynamicShowTitle) hudDynamicShowTitle.textContent = liveShow.name;
      if (hudDynamicShowSchedule) hudDynamicShowSchedule.textContent = 'Al aire ahora';
      if (heroCurrentShowLabel) heroCurrentShowLabel.textContent = `Mirá ${liveShow.name} en directo`;
    } else {
      // Find upcoming show
      let nextShow = null;
      let minDiff = 99;

      for (const s of shows) {
        let diff = (s.day - ba.dayOfWeek + 7) % 7;
        if (diff === 0 && ba.hour >= s.endHour) {
          diff = 7;
        }
        if (diff < minDiff) {
          minDiff = diff;
          nextShow = s;
        }
      }

      if (headerLiveText) headerLiveText.textContent = 'VICENTE LÓPEZ';
      if (cinemaLiveStatus) cinemaLiveStatus.textContent = 'Próximo..';
      if (nextShow) {
        const prefix = minDiff === 0 ? 'Hoy' : (minDiff === 1 ? 'Mañana' : nextShow.dayName);
        if (hudDynamicShowTitle) hudDynamicShowTitle.textContent = nextShow.name;
        if (hudDynamicShowSchedule) hudDynamicShowSchedule.textContent = `${prefix} · ${nextShow.startHour}:00 hs`;
        if (heroCurrentShowLabel) heroCurrentShowLabel.textContent = `Próximo stream: ${nextShow.name}`;
      }
    }
  }

  updateLiveInfo();
  setInterval(updateLiveInfo, 30000);


  /* ==========================================================================
     3. PROGRAMACIÓN FILTER PILLS
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const showCards = document.querySelectorAll('.luxury-show-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      showCards.forEach(card => {
        const day = card.getAttribute('data-day');
        if (filter === 'all' || day === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });


  /* ==========================================================================
     4. MOBILE MENU DRAWER
     ========================================================================== */
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const menuIcon = document.getElementById('menuIcon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (mobileDrawer) {
      mobileDrawer.classList.toggle('active', isMobileMenuOpen);
    }
    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute('aria-expanded', isMobileMenuOpen ? 'true' : 'false');
    }
    if (menuIcon && window.lucide) {
      menuIcon.setAttribute('data-lucide', isMobileMenuOpen ? 'x' : 'menu');
      window.lucide.createIcons();
    }
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMobileMenuOpen) {
        toggleMobileMenu();
      }
    });
  });


  /* ==========================================================================
     5. YOUTUBE LIVE MODAL POPUP
     ========================================================================== */
  const btnOpenStreamModal = document.getElementById('btnOpenStreamModal');
  const liveModal = document.getElementById('liveModal');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalIframe = document.getElementById('modalIframe');

  function openStreamModal() {
    if (liveModal) {
      liveModal.classList.add('active');
      if (modalIframe) {
        modalIframe.src = modalIframe.getAttribute('data-src');
      }
    }
  }

  function closeStreamModal() {
    if (liveModal) {
      liveModal.classList.remove('active');
      if (modalIframe) {
        modalIframe.src = '';
      }
    }
  }

  if (btnOpenStreamModal) {
    btnOpenStreamModal.addEventListener('click', openStreamModal);
  }

  if (btnCloseModal) {
    btnCloseModal.addEventListener('click', closeStreamModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeStreamModal);
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeStreamModal();
  });


  /* ==========================================================================
     6. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-menu .nav-item');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  console.log('🤖 BOTS · Quiet Luxury Streaming Web inicializada.');
});
