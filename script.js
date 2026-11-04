
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');
  navToggle.addEventListener('click', () => navMobile.classList.toggle('open'));
  navMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navMobile.classList.remove('open')));

  // portfolio tabs (تصوير / تصميم)
  document.querySelectorAll('#worksTabs .tab-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('#worksTabs .tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const w = btn.dataset.w;
      document.querySelectorAll('.work-panel').forEach(p=>{
        p.classList.toggle('show', p.dataset.wp===w);
      });
    });
  });

  // packages main tabs
  document.querySelectorAll('.maintab-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.maintab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.maintab-panel').forEach(p=>{
        p.classList.toggle('active', p.dataset.mp===btn.dataset.m);
      });
    });
  });

  // photo sub tabs
  document.querySelectorAll('#photoSubtabs .subtab-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('#photoSubtabs .subtab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.subpanel').forEach(p=>{
        p.classList.toggle('show', p.dataset.panel===btn.dataset.p);
      });
    });
  });

  // scroll-reveal animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

