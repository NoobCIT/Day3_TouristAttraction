//========= MAIN SLIDES =========//

let slides = document.getElementsByClassName('mainSlides');
let mainSlidesLeft = document.getElementById('arrow-left');
let mainSlidesRight = document.getElementById('arrow-right');

mainSlidesLeft.addEventListener('click', scrollMainSlides);
mainSlidesRight.addEventListener('click', scrollMainSlides);

function getMainCurrentSlideIndex() {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.value.includes('showing')) {
      return i;
    }
  }
}

function scrollMainSlides() {
  let index = getMainCurrentSlideIndex();
  if (this.id == 'arrow-left') {
    showMainSlides(index -= 1);
  } else if (this.id == 'arrow-right') {
    showMainSlides(index += 1);
  }
}

function showMainSlides(index) {
  let currentSlide = document.getElementsByClassName('showing')[0];
  currentSlide.classList.remove('showing');
  if (index > slides.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }
  slides[index].classList.add('showing');
}

//========= SECOND SLIDES =========//

let secondSlides = document.getElementsByClassName('secondSlides');

if (window.innerWidth > 650) {
  let secondSlidesLeft = document.getElementById('second-arrow-left');
  let secondSlidesRight = document.getElementById('second-arrow-right');
  secondSlidesLeft.addEventListener('click', scrollSecondSlides);
  secondSlidesRight.addEventListener('click', scrollSecondSlides);
}

function getSecondCurrentSlideIndices() {
  let slideArr = [];
  for (let i = 0; i < secondSlides.length; i++) {
    if (secondSlides[i].classList.value.includes('showing')) {
       slideArr.push(i);
    }
  }
  return slideArr;
}

function scrollSecondSlides() {
  let indices = getSecondCurrentSlideIndices();
  if (this.id == 'second-arrow-left' && leftLimit(indices)) {
    removeOldSlides();
    for (let i = 0; i < indices.length; i++) {
      indices[i] -= 1;
    }
    showSecondSlides(indices);
  } else if (this.id == 'second-arrow-right' && rightLimit(indices)) {
    removeOldSlides();
    for (let i = 0; i < indices.length; i++) {
      indices[i] += 1;
    }
    showSecondSlides(indices);
  }
}

//Remove classes to reflect user clicking on arrow
function removeOldSlides() {
  for (let i = 0; i < secondSlides.length; i++) {
    secondSlides[i].classList.remove('showing');
  }
}

//Prevent scrolling past 1st slide
function leftLimit(indices) {
  if (indices[0] - 1 < 0) {
    return false;
  }
  return true
}

//Prevent scrolling past last slide
function rightLimit(indices) {
  if (indices[indices.length - 1] + 1 > secondSlides.length - 1) {
    return false;
  }
  return true;
}

//Show new slides
function showSecondSlides(indices) {
  for (let j = 0; j < indices.length; j++) {
    secondSlides[indices[j]].classList.add('showing');
  }
}

//========= SECOND SLIDES [MOBILE]=========//

let mobileSlides = document.getElementsByClassName('secondSlides');

if (window.innerWidth <= 650) {
  let mobileSlidesLeft = document.getElementById('second-arrow-left');
  let mobileSlidesRight = document.getElementById('second-arrow-right');
  mobileSlidesLeft.addEventListener('click', scrollMobileSlides);
  mobileSlidesRight.addEventListener('click', scrollMobileSlides);
}

function getMobileCurrentSlideIndex() {
  for (let i = 0; i < mobileSlides.length; i++) {
    if (mobileSlides[i].classList.value.includes('mobile')) {
      return i;
    }
  }
}

function scrollMobileSlides() {
  let index = getMobileCurrentSlideIndex();
  if (this.id == 'second-arrow-left') {
    showMobileSlides(index -= 1);
  } else if (this.id == 'second-arrow-right') {
    showMobileSlides(index += 1);
  }
}

function showMobileSlides(index) {
  let currentSlide = document.getElementsByClassName('mobile')[0];
  currentSlide.classList.remove('mobile');
  if (index > mobileSlides.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = mobileSlides.length - 1;
  }
  mobileSlides[index].classList.add('mobile');
}
