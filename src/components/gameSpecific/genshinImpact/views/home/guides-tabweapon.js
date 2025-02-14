document.querySelectorAll('.btn-check').forEach(button => {
  button.addEventListener('click', () => {
    const guidescard = button.closest('.guides-card-weapon');
    const descriptionWeaponArea = guidescard.querySelector('.guides-weapon-main-area .guides-description-area');
    const effectWeaponArea = guidescard.querySelector('.guides-weapon-main-area .guides-effect-area');
    const loreWeaponArea = guidescard.querySelector('.guides-weapon-main-area .guides-lore-area');

    if (button.id.includes('btndescription')) {
      descriptionWeaponArea.classList.remove('hidden');
      effectWeaponArea.classList.add('hidden');
      loreWeaponArea.classList.add('hidden');
    } else if (button.id.includes('btneffect')) {
      descriptionWeaponArea.classList.add('hidden');
      effectWeaponArea.classList.remove('hidden');
      loreWeaponArea.classList.add('hidden');
    } else if (button.id.includes('btnlore')) {
      descriptionWeaponArea.classList.add('hidden');
      effectWeaponArea.classList.add('hidden');
      loreWeaponArea.classList.remove('hidden');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const spinnerWeapon = document.getElementById('spinner-weapon');
  const hiddenCardsWeapon = document.querySelectorAll('.guides-card-weapon.hidden');
  let cardIndexWeapon = 0;

  function loadCardsWeapon(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(spinnerWeapon);
        spinnerWeapon.style.display = 'block';

        setTimeout(() => {
          for (let i = 0; i < 4 && cardIndexWeapon < hiddenCardsWeapon.length; i++, cardIndexWeapon++) {
            hiddenCardsWeapon[cardIndexWeapon].classList.remove('hidden');
          }
          if (cardIndexWeapon < hiddenCardsWeapon.length) {
            observer.observe(spinnerWeapon);
          } else {
            spinnerWeapon.style.display = 'none';
          }
        }, 800); // Delay
      }
    });
  }

  const observer = new IntersectionObserver(loadCardsWeapon, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  });

  observer.observe(spinnerWeapon);
});

const loadmoreWeapon = document.getElementById('load-more-weapon');
const spinnerWeapon = document.getElementById('spinner-weapon');
document.querySelectorAll('.btn-load.load-more-weapon').forEach(button => {
  button.addEventListener('click', () => {

    loadmoreWeapon.classList.add('hidden');
    spinnerWeapon.classList.remove('hidden');
  });
});