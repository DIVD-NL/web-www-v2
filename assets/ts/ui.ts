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

function initUI() {
  initMainMenu();
  initAllCarousels();
  initAllAccordions();
  initAllSliders();
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
