Vue.component('elements', {
  props: {
    my_colors:{
      default: []
    },
    methods: {
      classColor(){
        console.log(this.my_colors);
        //v-for="color in my_colors"
        this.my_colors.forEach((color)=>{
          console.log(color);
          return color;
        });
      }
    }
  },

  template:`<div class="wrapper">
              <div class="block" ></div>
              <div class="block-color"></div>
              <input type="range" id="range" min="1" value="1" step="1" />
          </div>`,
  methods: {
    
    
  }
});


let Equalizer = new Vue({
  el: '#equalizer',
  data: {
    	colors: ['red','blue','green','black', 'orange', 'bardo', 'pink']
  }
});