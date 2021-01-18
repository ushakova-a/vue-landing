import Vue from 'vue';
import { NavbarPlugin, ModalPlugin } from 'bootstrap-vue';



import './components/carousel';
import './scss/main.scss';
import './scss/spritesheet.scss';
// import 'bootstrap-vue/src/icons.scss';

Vue.use(NavbarPlugin);
Vue.use(ModalPlugin);

const navigation = new Vue({
  el: '#navigation',
  data: {

  },
  methods: {
    scrollToSection: function (event) {
      // event.preventDefault();
      // this.message = this.message.split('').reverse().join('')
      console.log(event.target)
    }
  }
});

const StoryModal = new Vue({
  el: '#story',
  data: {
    modalShow: false
  }
});



