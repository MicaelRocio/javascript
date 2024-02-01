function lightUpLetters(element, duration, interval) {
    const text = element.innerText;
    element.innerText = '';
  
    for (let i = 0; i < text.length; i++) {
      const letterSpan = document.createElement('span');
      letterSpan.innerText = text[i];
      element.appendChild(letterSpan);
  
      setTimeout(() => {
        letterSpan.classList.add('blinking');
      }, i * interval);
    }
  }
  
  window.onload = function () {
    const changingText = document.getElementById("changingText");
    lightUpLetters(changingText, 500, 100);
  };
  