function fadeInLetters(element, duration, interval) {
    const text = element.innerText;
    element.innerText = '';
    
    for (let i = 0; i < text.length; i++) {
      const letterSpan = document.createElement('span');
      letterSpan.innerText = text[i];
      letterSpan.style.opacity = 0;
      element.appendChild(letterSpan);
      
      setTimeout(() => {
        letterSpan.style.transition = `opacity ${duration}ms`;
        letterSpan.style.opacity = 1;
      }, i * interval);
    }
  }
  
  window.onload = function () {
    const changingText = document.getElementById("changingText");
    fadeInLetters(changingText, 1000, 100);
  };
  