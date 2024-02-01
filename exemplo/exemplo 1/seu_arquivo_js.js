// Função para alternar a cor do texto entre duas cores
function changeTextColor() {
    const element = document.getElementById("changingText");
    const colors = ["red", "blue"]; // Adicione as cores que deseja usar aqui
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.color = randomColor;
  }
  
  // Executar a função quando a página é carregada
  window.onload = function () {
    // Chama a função a cada 1000 milissegundos (1 segundo)
    setInterval(changeTextColor, 1000);
  };
  