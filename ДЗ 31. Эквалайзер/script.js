Vue.component('elements', {

   data() {
      return {
       
      };
    },


  template:`<div class="wrapper">
              <div class="block"></div>
              <input type="range" id="range" min="1" value="1" step="1" />
          </div>`,
  methods: {
    
  }
})



let Equalizer = new Vue({
  el: '#equalizer',
  data: {}
});