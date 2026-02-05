export default class MenuMobile {
  constructor(menuButton, menuLista) {
    this.menuButton = document.querySelector(menuButton);
    this.menuLista = document.querySelector(menuLista);

    this.abrirMenu = this.abrirMenu.bind(this);
  }
  abrirMenu() {
    this.menuLista.classList.toggle("active");
    this.menuButton.classList.toggle("active");
  }
  init() {
    this.menuButton.addEventListener("click", this.abrirMenu);
    return this;
  }
}
