
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
                         document.getElementById('portfolio-image-3')
                       ]

const portfolioItem = [
                        document.getElementById('portfolio-item-0'),
                        document.getElementById('portfolio-item-1'),
                        document.getElementById('portfolio-item-2'),
                        document.getElementById('portfolio-item-3')
                      ]

////////////// Portfolio items slide in from right EN ///////////////

const portfolioImageEN = [
                        document.getElementById('portfolio-image-0EN'),
                        document.getElementById('portfolio-image-1EN'),
                        document.getElementById('portfolio-image-2EN'),
                        document.getElementById('portfolio-image-3EN')
                        ]

const portfolioItemEN = [
                        document.getElementById('portfolio-item-0EN'),
                        document.getElementById('portfolio-item-1EN'),
                        document.getElementById('portfolio-item-2EN'),
                        document.getElementById('portfolio-item-3EN')
                        ]



const closeBtn = document.getElementsByClassName('close-btn-portfolio');


///////////// Click thumbnail to activate slide in NL./////////////////

if (portfolioImage[0] = document.getElementById('portfolio-image-0')) {
  portfolioImage[0].addEventListener('click', () => {
    portfolioItem[0].classList.add('horizTranslate');
    portfolioItem[0].classList.remove('horizTranslateNone');
  })


  portfolioImage[1].addEventListener('click', () => {
    portfolioItem[1].classList.add('horizTranslate');
    portfolioItem[1].classList.remove('horizTranslateNone');
  })

  portfolioImage[2].addEventListener('click', () => {
    portfolioItem[2].classList.add('horizTranslate');
    portfolioItem[2].classList.remove('horizTranslateNone');
  })

  portfolioImage[3].addEventListener('click', () => {
    portfolioItem[3].classList.add('horizTranslate');
    portfolioItem[3].classList.remove('horizTranslateNone');
  })

/// Loop btn's and add class to close slides
  for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', () => {
      for (var j = 0; j < portfolioItem.length; j++) {
        portfolioItem[j].classList.remove('horizTranslate');
        portfolioItem[j].classList.add('horizTranslateNone');
        }
    })
  }
}


//////////////// Click thumbnail to activate slide in EN.////////////////

if (portfolioImageEN[0] = document.getElementById('portfolio-image-0EN')) {
  portfolioImageEN[0].addEventListener('click', () => {
    portfolioItemEN[0].classList.add('horizTranslate');
    portfolioItemEN[0].classList.remove('horizTranslateNone');
  })


  portfolioImageEN[1].addEventListener('click', () => {
    portfolioItemEN[1].classList.add('horizTranslate');
    portfolioItemEN[1].classList.remove('horizTranslateNone');
  })

  portfolioImageEN[2].addEventListener('click', () => {
    portfolioItemEN[2].classList.add('horizTranslate');
    portfolioItemEN[2].classList.remove('horizTranslateNone');
  })

  portfolioImageEN[3].addEventListener('click', () => {
    portfolioItemEN[3].classList.add('horizTranslate');
    portfolioItemEN[3].classList.remove('horizTranslateNone');
  })

/// Loop btn's and add class to close slides
  for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', () => {
      for (var j = 0; j < portfolioItemEN.length; j++) {
        portfolioItemEN[j].classList.remove('horizTranslate');
        portfolioItemEN[j].classList.add('horizTranslateNone');
        }
    })
  }
}
