// --> My Script Begin

let policyBtn = document.querySelector('.ps-policy__btn'),
policyBox = document.querySelector('.ps-policy'),
openModal = document.querySelector('.ps-modal'),
openModalBtn = document.querySelectorAll('.btn'),
modalCloseBtn = document.querySelector('.ps-modal__close'),
body = document.querySelector('body');


for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener('click', () => {
    openModal.style.opacity = '5';
    openModal.style.visibility = 'visible';
    body.style.overflow = 'hidden';
  });
}

modalCloseBtn.addEventListener('click', () => {
  openModal.style.opacity = '0';
  openModal.style.visibility = 'hidden';
  body.style.overflow = 'auto';
});

window.onclick = function(event) {
  if (event.target == openModal) {
    openModal.style.opacity = '0';
    openModal.style.visibility = 'hidden';
    body.style.overflow = 'auto';
  }
}

policyBtn.addEventListener('click', () => {
  policyBox.style.bottom = '-100%';
});

//  --> My Script End


// --> Begin Gallery MagnificPopup

$(document).ready(function() {
  $('.ps-gallery__zoom').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
      return element.find('img');
      }
    }    
  });
});

// --> End Gallery MagnificPopup

// --> Begin Slick Slider

$(document).ready(function(){
    $('.ps-reviews__box').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
    });
});

// --> End Slick Slider