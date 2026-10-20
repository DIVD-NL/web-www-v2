function initMainMenu() {
  let menuButtonEl = document.getElementById('main-menu-button');
  let subNavEl = document.getElementById('sub-nav');

  function onClick() {
    if (subNavEl) {
      subNavEl.classList.toggle('active');
    }
  }

  if (menuButtonEl && subNavEl) {
    menuButtonEl.addEventListener('click', onClick);
  }
}

function initCarousel(el: HTMLDivElement) {
  let index = 0;
  let pageCount = 0;

  let slides = el.querySelectorAll<HTMLElement>('.slides');
  let pageCountContainer = el.querySelector<HTMLElement>('.page-count');
  let slidesContainer = slides.length ? slides[0] : null;
  if (slidesContainer) {
    pageCount = slidesContainer.children.length;
  }

  function setPageCounter(n) {
    if (pageCountContainer) {
      pageCountContainer.innerHTML = `${n} / ${pageCount}`;
    }
  }

  function nextPage() {
    if (!slidesContainer) return;
    if (index < pageCount - 1) {
      index++;
    } else {
      index = 0;
    }

    let child = slidesContainer.children[index] as HTMLElement;
    let left = child.offsetLeft;
    smoothScroll(left, slidesContainer);
    setPageCounter(index + 1);
  }

  function prevPage() {
    if (!slidesContainer) return;
    if (index > 0) {
      index--;
    } else {
      index = pageCount - 1;
    }
    let child = slidesContainer.children[index] as HTMLElement;
    let left = child.offsetLeft;
    smoothScroll(left, slidesContainer);
    setPageCounter(index + 1);
  }

  let buttons = el.querySelectorAll('.pages button');
  if (!buttons.length) {
    buttons = el.querySelectorAll('button');
  }
  if (buttons.length === 2) {
    buttons[0].addEventListener('click', prevPage);
    buttons[1].addEventListener('click', nextPage);
  }
}

function initAccordion(el: HTMLDivElement) {
  let items = el.querySelectorAll('.accordion-item');

  function toggleItem(itemEl) {
    items.forEach((item) => {
      if (item !== itemEl) item.classList.remove('active');
    });
    itemEl.classList.toggle('active');
  }

  items.forEach((item) => {
    let h3 = item.querySelector('h3');
    if (h3) {
      h3.addEventListener('click', () => {
        toggleItem(item);
      });
    }
  });
}

function initSlider(el: HTMLDivElement) {
  const slidable = el.querySelector('#slidable');
  el.querySelector('#slider-left-button')?.addEventListener('click', function () {
    slidable?.scrollBy({ left: -370, behavior: 'smooth' });
  });

  el.querySelector('#slider-right-button')?.addEventListener('click', function () {
    slidable?.scrollBy({ left: 370, behavior: 'smooth' });
  });
}

function initAllSliders() {
  let els = document.querySelectorAll<HTMLDivElement>('#divd-slider');
  els.forEach(initSlider);
}

function initAllCarousels() {
  let els = document.querySelectorAll<HTMLDivElement>('.carousel');
  els.forEach(initCarousel);

  let smallEls = document.querySelectorAll<HTMLDivElement>('.smallousel');
  smallEls.forEach(initCarousel);
}

function initAllAccordions() {
  let els = document.querySelectorAll<HTMLDivElement>('.accordion');
  els.forEach(initAccordion);
}

/* "We got hacked" page (layouts/hacked/list.html) */
function initHackPage() {
  const page = document.querySelector<HTMLElement>('.hack-page');
  if (!page) return;

  const dialogFor = (id: string | null) =>
    id ? document.querySelector<HTMLDialogElement>(`dialog.hack-modal[id="${CSS.escape(id)}"]`) : null;

  const closeAll = () => {
    page.querySelectorAll<HTMLDialogElement>('dialog.hack-modal[open]').forEach((d) => d.close());
  };

  const open = (id: string, updateHash = true) => {
    const dialog = dialogFor(id);
    if (!dialog) return false;
    closeAll();
    dialog.showModal();
    dialog.scrollTop = 0;
    if (updateHash && location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
    return true;
  };

  const clearHash = () => {
    if (location.hash.startsWith('#update-')) history.pushState(null, '', location.pathname + location.search);
  };

  // Pop-ups: open via [data-hack-open], close via button, Esc or backdrop click.
  page.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const opener = target.closest<HTMLElement>('[data-hack-open]');
    if (opener && open(opener.dataset.hackOpen || '')) {
      e.preventDefault();
      return;
    }
    if (target.closest('[data-hack-close]')) {
      target.closest<HTMLDialogElement>('dialog')?.close();
      return;
    }
    if (target instanceof HTMLDialogElement && target.classList.contains('hack-modal')) {
      target.close(); // click on the backdrop
    }
  });

  page.querySelectorAll<HTMLDialogElement>('dialog.hack-modal').forEach((d) => {
    d.addEventListener('close', () => {
      if (!page.querySelector('dialog.hack-modal[open]')) clearHash();
    });
  });

  const syncWithHash = () => {
    const id = location.hash.slice(1);
    if (id.startsWith('update-')) open(id, false);
    else closeAll();
  };
  window.addEventListener('popstate', syncWithHash);
  syncWithHash();

  // Share: native share sheet, or copy the link.
  page.querySelectorAll<HTMLButtonElement>('[data-hack-share]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const url = `${location.origin}${location.pathname}#${btn.dataset.hackShare}`;
      try {
        if (navigator.share) {
          await navigator.share({ title: document.title, url });
        } else {
          await navigator.clipboard.writeText(url);
          const label = btn.textContent;
          btn.textContent = 'Link copied';
          setTimeout(() => (btn.textContent = label), 2000);
        }
      } catch {
        /* user cancelled */
      }
    });
  });

  // Anchor nav: highlight the section in view.
  const anchors = page.querySelectorAll<HTMLAnchorElement>('[data-hack-anchor]');
  if (anchors.length && 'IntersectionObserver' in window) {
    // Anchors point at the section headings; watch the surrounding section.
    const bySection = new Map<Element, HTMLAnchorElement>();
    anchors.forEach((a) => {
      const target = document.getElementById(a.hash.slice(1));
      if (target) bySection.set(target.closest('section') ?? target, a);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          anchors.forEach((a) => a.classList.remove('is-active'));
          bySection.get(entry.target)?.classList.add('is-active');
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    bySection.forEach((_, section) => observer.observe(section));
  }
}

function initUI() {
  initMainMenu();
  initAllCarousels();
  initAllAccordions();
  initAllSliders();
  initHackPage();
}

document.addEventListener('DOMContentLoaded', function () {
  initUI();
});

/* utils */
function smoothScroll(targetScroll, el) {
  const startScroll = el.scrollLeft;
  const distance = targetScroll - startScroll;
  const startTime = new Date().getTime();

  function animate() {
    const currentTime = new Date().getTime();
    const timePassed = currentTime - startTime;
    const duration = 300; // Animation duration in ms

    // Calculate the easing (you can replace this with other easing functions)
    const easing = (t) => t * t; // simple quadratic easing
    const progress = Math.min(timePassed / duration, 1);

    el.scrollLeft = startScroll + distance * easing(progress);

    if (progress < 1) {
      window.requestAnimationFrame(animate);
    }
  }

  window.requestAnimationFrame(animate);
}
