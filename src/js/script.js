import FullscreenToggle from "./modules/fullscreen.js";

const fullscreen = new FullscreenToggle({
  botao: "#btn-expandir",
  icone: "#icone-expandir",
  alvo: "main",
  iconeExpandir: "../src/img/expandir.svg",
  iconeColapsar: "../src/img/colapsar.svg",
});
fullscreen.init();
