export default class FullscreenToggle {
  constructor({ botao, icone, alvo, iconeExpandir, iconeColapsar }) {
    this.botao = document.querySelector(botao);
    this.icone = document.querySelector(icone);
    this.alvo = document.querySelector(alvo);
    this.iconeExpandir = iconeExpandir;
    this.iconeColapsar = iconeColapsar;

    this.handleClick = this.handleClick.bind(this);
    this.handleFullscreenChange = this.handleFullscreenChange.bind(this);

    this.init();
  }

  init() {
    if (!this.botao || !this.icone || !this.alvo) return;

    this.botao.addEventListener("click", this.handleClick);
    document.addEventListener("fullscreenchange", this.handleFullscreenChange);
  }

  handleClick() {
    if (!document.fullscreenElement) {
      this.alvo.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  handleFullscreenChange() {
    const estaFullscreen = document.fullscreenElement === this.alvo;

    this.icone.src = estaFullscreen ? this.iconeColapsar : this.iconeExpandir;

    const label = estaFullscreen ? "Sair da tela cheia" : "Expandir tela";

    this.botao.setAttribute("aria-label", label);
    this.icone.alt = label;
  }
}
