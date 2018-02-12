
/////////////////// Mobile menu trigger ////////////////////

const mobileNav = document.getElementById('mobile-nav');
const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');

openMenu.addEventListener('click', () => {
  mobileNav.classList.add('verticTranslate');
  mobileNav.classList.remove('verticTranslateNone');
  closeMenu.style.display = 'block';
  openMenu.style.display = 'none';
})

closeMenu.addEventListener('click', () => {
  mobileNav.classList.remove('verticTranslate');
  mobileNav.classList.add('verticTranslateNone');
  closeMenu.style.display = 'none';
  openMenu.style.display = 'block';
})

////////// END mobile menu trigger ////////////



/////////////// Portfolio items slide in from right NL ///////////////



const portfolioImage = [
                        document.getElementById('portfolio-image-0'),
                        document.getElementById('portfolio-image-1'),
                        document.getElementById('portfolio-image-2'),
                        document.getElementById('portfolio-image-3'),
                        document.getElementById('portfolio-image-0EN'),
                        document.getElementById('portfolio-image-1EN'),
                        document.getElementById('portfolio-image-2EN'),
                        document.getElementById('portfolio-image-3EN')
                      ]

const portfolioItem = [
                        document.getElementById('portfolio-item-0'),
                        document.getElementById('portfolio-item-1'),
                        document.getElementById('portfolio-item-2'),
                        document.getElementById('portfolio-item-3'),
                        document.getElementById('portfolio-item-0EN'),
                        document.getElementById('portfolio-item-1EN'),
                        document.getElementById('portfolio-item-2EN'),
                        document.getElementById('portfolio-item-3EN')
                      ]

////////////// Portfolio items slide in from right EN ///////////////





const closeBtn = document.getElementsByClassName('close-btn-portfolio');


///////////// Click thumbnail to activate slide in /////////////////
function portfolioSlider(clickIt, slider) {
  clickIt.addEventListener('click', () => {
    slider.classList.remove('horizTranslateNone');
    slider.classList.add('horizTranslate');
    for (var i = 0; i < closeBtn.length; i++) {
      closeBtn[i].addEventListener('click', () => {
          slider.classList.remove('horizTranslate');
          slider.classList.add('horizTranslateNone');        
      })
    }
  })

}

if (location.pathname == "/") {
  portfolioSlider(portfolioImage[0], portfolioItem[0]);
  portfolioSlider(portfolioImage[1], portfolioItem[1]);
  portfolioSlider(portfolioImage[2], portfolioItem[2]);
  portfolioSlider(portfolioImage[3], portfolioItem[3]);
}

if (window.location.href === 'https://websev.nl/en') {
  portfolioSlider(portfolioImage[4], portfolioItem[4]);
  portfolioSlider(portfolioImage[5], portfolioItem[5]);
  portfolioSlider(portfolioImage[6], portfolioItem[6]);
  portfolioSlider(portfolioImage[7], portfolioItem[7]);
}
