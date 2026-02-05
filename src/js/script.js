import FullscreenToggle from "./modules/fullscreen.js";
import ThemeToggle from "./modules/tema.js";
import MenuMobile from "./modules/menu-mobile.js";

const fullscreen = new FullscreenToggle({
  botao: "#btn-expandir",
  icone: "#icone-expandir",
  alvo: "main",
  iconeExpandir: "../src/img/expandir.svg",
  iconeColapsar: "../src/img/colapsar.svg",
});
fullscreen.init();

const tema = new ThemeToggle("#btn-tema", 'body');
tema.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="lista"]');
menuMobile.init();