document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".landing-section-right");
    const images = document.querySelectorAll(".random-image");
  
    images.forEach(function(image) {
      // const randomX = Math.random() * (container.offsetWidth - image.offsetWidth);
      // const randomY = Math.random() * (container.offsetHeight - image.offsetHeight);
      const randomX = Math.random() * 500;
      const randomY = Math.random() * (container.offsetHeight - image.offsetHeight);
      
      image.style.left = randomX + "px";
      image.style.top = randomY + "px";
    });


  });

