class VariantSwatch extends HTMLElement {
  constructor() {
    super();
    this._init();
  }

  _init() {
    this.price = this.querySelector(".js-variant-swatch-price")
    this.select = this.querySelector(".js-variant-swatch-select")

    this.select.addEventListener("change", this._onSelectChange.bind(this))
  }

  _onSelectChange() {
    this.price.textContent = this.select.querySelector("option:checked").dataset.price
  }
}

customElements.define("variant-swatch", VariantSwatch);
