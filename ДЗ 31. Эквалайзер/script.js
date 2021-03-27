Vue.component('elements', {
  props: ['color'],

  methods: {
    setHeight(e) {
      // в качество единственно аргумента приходит объект  e, с описанием события
      // что бы это значение перезаписалось в переменную height нужно через $set перезаписать полученное значение
      this.$set(this, 'height', (e.target.value) * 3 + 'px');
    }
  },
  data() {
    return {
      height: '300px'
    }
  },

  template: `<div class="wrapper">
                <div class="block" :style="{height: height, background: color}"></div>
              <input value="300" type="range" min="1" step="1" @change="setHeight" />
          </div>`,

});


let Equalizer = new Vue({
  el: '#equalizer',
  data: {
    colors: ['red', 'blue', 'green', 'black', 'orange', 'bardo', 'pink']
  }
});