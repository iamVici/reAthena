document.querySelectorAll('.btn-check').forEach(button => {
  button.addEventListener('click', () => {
    const guidescard = button.closest('.guides-card-char');
    const descriptionArea = guidescard.querySelector('.guides-char-main-area .guides-description-area');
    const loreArea = guidescard.querySelector('.guides-char-main-area .guides-lore-area');
    const charViewArea = guidescard.querySelector('.guides-char-main-area .guides-charview-area');

    if (button.id.includes('btndescription')) {
      descriptionArea.classList.remove('hidden');
      loreArea.classList.add('hidden');
      charViewArea.classList.add('hidden');
    } else if (button.id.includes('btnlore')) {
      descriptionArea.classList.add('hidden');
      loreArea.classList.remove('hidden');
      charViewArea.classList.add('hidden');
    } else if (button.id.includes('btncharview')) {
      descriptionArea.classList.add('hidden');
      loreArea.classList.add('hidden');
      charViewArea.classList.remove('hidden');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const spinnerChar = document.getElementById('spinner-char');
  const hiddenCardsChar = document.querySelectorAll('.guides-card-char.hidden');
  let cardIndexChar = 0;

  function loadCardsChar(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(spinnerChar);
        spinnerChar.style.display = 'block';

        setTimeout(() => {
          for (let i = 0; i < 4 && cardIndexChar < hiddenCardsChar.length; i++, cardIndexChar++) {
            hiddenCardsChar[cardIndexChar].classList.remove('hidden');
          }
          if (cardIndexChar < hiddenCardsChar.length) {
            observer.observe(spinnerChar);
          } else {
            spinnerChar.style.display = 'none';
          }
        }, 800); // Delay
      }
    });
  }

  const observer = new IntersectionObserver(loadCardsChar, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  });

  observer.observe(spinnerChar);
});

const loadmoreChar = document.getElementById('load-more-char');
const spinnerChar = document.getElementById('spinner-char');
document.querySelectorAll('.btn-load.load-more-char').forEach(button => {
  button.addEventListener('click', () => {

    loadmoreChar.classList.add('hidden');
    spinnerChar.classList.remove('hidden');
  });
});