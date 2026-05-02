/* ── Tab switching ──────────────────────────────────────────────────── */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

/* ── Contact form ───────────────────────────────────────────────────── */
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = '';
  status.className = 'form-status';

  const fields = ['name', 'email', 'message'];
  let valid = true;

  fields.forEach(id => {
    const input = document.getElementById(id);
    input.classList.remove('error');
    if (!input.value.trim()) { input.classList.add('error'); valid = false; }
  });

  const emailEl = document.getElementById('email');
  if (emailEl.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
    emailEl.classList.add('error');
    valid = false;
  }

  if (!valid) {
    status.textContent = 'Please fill in all fields.';
    status.classList.add('error-msg');
    return;
  }

  const btn = form.querySelector('.btn-send');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  setTimeout(() => {
    form.reset();
    btn.disabled = false;
    btn.textContent = 'Send';
    status.textContent = 'Sent — I\'ll get back to you soon.';
    status.classList.add('success');
  }, 1000);
});
