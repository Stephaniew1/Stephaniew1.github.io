let INDEX = 0;

function updateCarousel() {
    let html = document.getElementById('carousel');
    let newHtml = "";

    let images = getDisplayImages()
    newHtml += getImageAsHtml(images);

    newHtml += addButton();

    html.innerHTML = newHtml
};

function addButton() {
    return "<button onclick='updateCarousel()'>Next</button>";
}

function getDisplayImages() {
    let allImages = getImages();
    let size = allImages.length;

    let images = [];

    let start = INDEX;

    let index = 0;

    for (let i = 0; i < 3; i++) {
        index = (start + i) % size;
        images.push(allImages[index]);
    }

    INDEX = ++index;

    return images;
}

function getImageAsHtml(images) {
    let html = '';

    for (let i = 0; i < images.length; i++) {
        html += '<img src="' + images[i] + '">'
    }

    return html
}

function getImages() {
    return [
        'pngassets/car1.png',
        'pngassets/car2.png',
        'pngassets/car3.png',
        'pngassets/car4.png'
    ];
}

/*
window.addEventListener('DOMContentLoaded', function() {
    var carouselInner = document.querySelector('.carousel-inner');
    var images = document.querySelectorAll('.carousel-inner img');
    var currentIndex = 0;
  
    function showImage(index) {
      carouselInner.style.transform = `translateX(-${index * 25}%)`;
  
      for (var i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
      }
      images[index].classList.add('active');
    }
  
    function nextImage() {
      currentIndex++;
      if (currentIndex >= images.length - 3) { // Subtract 3 to display 4 items at a time
        currentIndex = 0;
      }
      showImage(currentIndex);
    }
  
    setInterval(nextImage, 2000); // Change image every 2 seconds
  });
  */