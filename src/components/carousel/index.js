import Vue from 'vue';
import { VueAgile } from 'vue-agile';
import { slides } from './slides';
import { BIcon, BIconChevronLeft, BIconChevronRight } from 'bootstrap-vue';

const ReviewsCarousel = new Vue({
  el: '#carousel-reviews',
  components: {
    agile: VueAgile,
    BIcon,
    BIconChevronLeft,
    BIconChevronRight
  },

  data() {
    return {
      show: false,
      refs: '',
      slides,

      mainCarouselOptions: {
        navButtons: false,
        dots: false,
        autoplay: false,
        speed: 600
      },

      thumbnailOptions: {
        navButtons: false,
        dots: false,
        autoplay: false,
        speed: 600,
        slidesToShow: 1,

        responsive: [
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 3,
              infinite: true,
              centerMode: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 5,
            }
          }
        ]
      }
    }
  },

  methods: {
    setRef: function (refs) {
      this.refs = refs;
    },

    switchSlide: function (i) {
      this.$refs.thumbnails.goTo(i);
    }
  },

  mounted() {
    this.show = true;
  }

});

ReviewsCarousel.setRef(ReviewsCarousel.$refs);

export default ReviewsCarousel;