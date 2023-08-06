import Swiper, { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "@/shopify/snippets/variant-swatch";

const FeaturedProducts = {
  onLoad() {
    this._init();
  },

  _init() {
    this._initSwiper();

    window.addEventListener("resize", this._initSwiper.bind(this));
  },

  _initSwiper: function () {
    if (window.innerWidth <= 766) {
      if (!this.init) {
        this.init = true;
        this.swiper = new Swiper(".js-featured-product", {
          slidesPerView: 1,
          autoplay: true,
          spaceBetween: 32,
          pagination: {
            el: ".js-featured-product-pagination",
            type: "bullets",
            clickable: true,
          },
          modules: [Autoplay, Pagination],
        });
      }
    } else if (this.init) {
      this.swiper.destroy();
      this.init = false;
    }
  }
};

export default FeaturedProducts;
