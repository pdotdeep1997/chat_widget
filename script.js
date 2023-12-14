document.addEventListener('DOMContentLoaded', function () {

  var script = document.createElement('script');
  script.src = 'https://your-cdn.com/my-widget.bundle.js';
  script.onload = function() {
    MyWidget.init({ message: 'Hello from MyWidget!' });
  };
  document.body.appendChild(script);


  const overlayWidget = document.createElement('div');

  overlayWidget.style.width = '50px';
  overlayWidget.style.height = '50px';
  overlayWidget.style.backgroundColor = 'red';

  // Set the position to fixed and z-index to a high value
  overlayWidget.style.position = 'fixed';
  overlayWidget.style.zIndex = '1000';

  // Set the initial position explicitly
  overlayWidget.style.top = '0';
  overlayWidget.style.left = '0';

  document.body.appendChild(overlayWidget);

  // Initial position
  let posX = 0;
  let posY = 0;
  let directionX = 1; // 1 or -1 for right or left
  let directionY = 1; // 1 or -1 for down or up

  function moveWidget() {
      posX += 3 * directionX;
      posY += 3 * directionY;

      // Bounce off the window edges
      if (posX + overlayWidget.clientWidth > window.innerWidth || posX < 0) {
          directionX *= -1;
      }

      if (posY + overlayWidget.clientHeight > window.innerHeight || posY < 0) {
          directionY *= -1;
      }

      overlayWidget.style.transform = `translate(${posX}px, ${posY}px)`;
      requestAnimationFrame(moveWidget);
  }



  moveWidget(); 

});
