// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Nav: scrolled state + mobile menu =====
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  document.getElementById('toTop').classList.toggle('show', window.scrollY > 600);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  })
);

// ===== Reveal on scroll =====
const io = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
  io.observe(el);
});

// ===== Contact form (no backend — opens mail client) =====
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  if (!name || !phone) {
    note.textContent = 'Podaj imię oraz numer telefonu.';
    note.className = 'form__note err';
    return;
  }
  const subject = encodeURIComponent(`Zapytanie: ${form.topic.value}`);
  const body = encodeURIComponent(
    `Imię i nazwisko: ${name}\nTelefon: ${phone}\nTemat: ${form.topic.value}\n\n${form.msg.value.trim()}`
  );
  window.location.href = `mailto:wirizak@gmail.com?subject=${subject}&body=${body}`;
  note.textContent = 'Dziękujemy! Otwieramy Twój program pocztowy…';
  note.className = 'form__note ok';
  form.reset();
});

// ===== Hero circuit animation =====
(function circuit() {
  const canvas = document.getElementById('circuit');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d');
  let w, h, dpr, nodes = [], pulses = [];

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    build();
  };

  const build = () => {
    nodes = [];
    const cols = Math.max(6, Math.floor(w / 130));
    const rows = Math.max(4, Math.floor(h / 130));
    const gx = w / cols, gy = h / rows;
    for (let i = 0; i <= cols; i++)
      for (let j = 0; j <= rows; j++)
        nodes.push({ x: i * gx + (Math.random() - .5) * gx * .4,
                     y: j * gy + (Math.random() - .5) * gy * .4 });
  };

  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

  const spawn = () => {
    const a = nodes[(Math.random() * nodes.length) | 0];
    let b = null, best = 1e9;
    for (const n of nodes) {
      const d = dist(a, n);
      if (d > 40 && d < best) { best = d; b = n; }
    }
    if (b) pulses.push({ a, b, t: 0, sp: .006 + Math.random() * .01 });
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    // faint links
    ctx.strokeStyle = 'rgba(56,189,248,.07)';
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = dist(nodes[i], nodes[j]);
        if (d < 150) { ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke(); }
      }
    }
    // nodes
    for (const n of nodes) { ctx.fillStyle = 'rgba(148,163,184,.25)'; ctx.fillRect(n.x - 1, n.y - 1, 2, 2); }
    // pulses
    for (const p of pulses) {
      p.t += p.sp;
      const x = p.a.x + (p.b.x - p.a.x) * p.t;
      const y = p.a.y + (p.b.y - p.a.y) * p.t;
      ctx.strokeStyle = 'rgba(245,179,1,.35)'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(p.a.x, p.a.y); ctx.lineTo(x, y); ctx.stroke();
      ctx.fillStyle = '#f5b301';
      ctx.beginPath(); ctx.arc(x, y, 2.2, 0, Math.PI * 2); ctx.fill();
    }
    pulses = pulses.filter(p => p.t < 1);
    if (pulses.length < 14 && Math.random() < .08) spawn();
    requestAnimationFrame(draw);
  };

  window.addEventListener('resize', resize);
  resize();
  draw();
})();
