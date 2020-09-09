let policyBtn = document.querySelector('.ps-policy__btn'),
policyBox = document.querySelector('.ps-policy');

policyBtn.addEventListener('click', () => {
  policyBox.style.display = 'none';
});

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