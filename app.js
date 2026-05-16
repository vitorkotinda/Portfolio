particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80, // Quantidade de pontos
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#000000" }, // Cor dos pontos (preto)
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000", // Cor das linhas
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3, // Velocidade
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "grab" }, // Efeito de atrair ao passar o mouse
      "onclick": { "enable": true, "mode": "push" }
    }
  },
  "retina_detect": true
});
