export default class ThemeToggle {
  constructor(botao, elementoRaiz) {
    this.botao = document.querySelector(botao);
    this.elementoRaiz = document.querySelector(elementoRaiz);
    this.storageKey = "timehub-tema";

    this.toggleTema = this.toggleTema.bind(this);
  }

  aplicarTemaSalvo() {
    const temaSalvo = localStorage.getItem(this.storageKey);

    if (temaSalvo) {
      this.elementoRaiz.setAttribute("data-tema", temaSalvo);
    }
  }

  toggleTema() {
    const temaAtual = this.elementoRaiz.getAttribute("data-tema");
    const novoTema = temaAtual === "dark" ? "light" : "dark";

    this.elementoRaiz.setAttribute("data-tema", novoTema);
    localStorage.setItem(this.storageKey, novoTema);
  }

  init() {
    this.aplicarTemaSalvo();

    if (this.botao) {
      this.botao.addEventListener("click", this.toggleTema);
    }
  }
}
