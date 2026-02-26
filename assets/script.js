const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DUhWnU3E918/",
  "https://www.instagram.com/p/DUa62lvkxqW/",
  "https://www.instagram.com/p/DUhVy1kE-pZ/"
];

const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

const instaContainer = document.querySelector('[data-instagram]');
if (instaContainer) {
  if (INSTAGRAM_POSTS.length > 0) {
    const grid = document.createElement('div');
    grid.className = 'instagram-grid';

    INSTAGRAM_POSTS.forEach((url) => {
      const block = document.createElement('blockquote');
      block.className = 'instagram-media';
      block.setAttribute('data-instgrm-permalink', url);
      block.setAttribute('data-instgrm-version', '14');
      block.style.background = '#fff';
      block.style.border = '1px solid #ded1c0';
      block.style.borderRadius = '12px';
      block.style.margin = '0';
      grid.appendChild(block);
    });

    instaContainer.appendChild(grid);
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    instaContainer.appendChild(script);
  } else {
    instaContainer.innerHTML = `
      <div class="card">
        <h3>@haneeday_tea 보러가기</h3>
        <p>브랜드 무드와 티 스토리를 인스타그램에서 이어갑니다.</p>
        <a class="btn primary" href="https://www.instagram.com/haneeday_tea" target="_blank" rel="noreferrer">인스타그램 방문</a>
      </div>
    `;
  }
}

const forms = document.querySelectorAll('form[data-formspree]');
forms.forEach((form) => {
  const toast = form.querySelector('.toast');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (form.querySelector('input[name="_gotcha"]').value.trim() !== '') {
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        if (toast) {
          toast.textContent = '접수 완료. 빠르게 확인 후 연락드리겠습니다.';
          toast.classList.add('show');
        }
      } else {
        throw new Error('Formspree error');
      }
    } catch (error) {
      if (toast) {
        toast.textContent = '잠시 후 다시 시도해 주세요. 인스타그램 DM도 열려 있습니다.';
        toast.classList.add('show');
      }
    }
  });
});
