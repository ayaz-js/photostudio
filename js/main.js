// --> My Script Begin

let policyBtn = document.querySelector('.ps-policy__btn'),
policyBox = document.querySelector('.ps-policy'),
feedBack = document.querySelector('.ps-modal'),
feedBackBtn = document.querySelectorAll('.btn'),
feedBackCloseBtn = document.querySelector('.ps-modal__close'),
body = document.querySelector('body');


for (let i = 0; i < feedBackBtn.length; i++) {
  feedBackBtn[i].addEventListener('click', () => {
    feedBack.style.display = 'block';
    body.style.overflow = 'hidden';
  });
}

feedBackCloseBtn.addEventListener('click', () => {
  feedBack.style.display = 'none';
  body.style.overflow = 'auto';
});

window.onclick = function(event) {
  if (event.target == feedBack) {
    feedBack.style.display = 'none';
    body.style.overflow = 'auto';
  }
}

policyBtn.addEventListener('click', () => {
  policyBox.style.display = 'none';
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