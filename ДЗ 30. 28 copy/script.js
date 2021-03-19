
//создаем два листа 
Vue.component('first-list',{
  //атрибут arr принимкаем в first-list
  props: {
    arr:{
       //тип данных 
    type: Array,
    default: []
    }
   
  },
  //выводим перменную (li - это элемент нашего массива)
  //value каждое значение внутри нашей li
  //на кнопку навешиваем событие @click="addValue"
  //и описываем в ф-ции addValue ( в methods)
  template:`<div class="first-list">
              <ul>
                <li v-for="value in arr">{{ value }}</li>
              </ul>
              <button class="transfer" @click="removeItem">Transfer</button>
          </div>`,
  methods: {
    removeItem(key){
      this.arr.splice(key,1);
      // this.addItem();
    },
    addItem(){
      // this.arr.push('hi');
    }
  }
});

Vue.component('second-list',{
   props: {
    arr:{
       //тип данных 
    type: Array,
    default: []
    }
   
  },
   
  template:`<div class="second-list">
              <ul>
                <li></li>
              </ul>
            </div>`,
  methods: {
   
  
  }
});

//делаем компонент wrapper
Vue.component('wrapper',{
  //создаем объект (лист)
  data(){
    return {
      //массив дел 
      list:['покушать','помыть посуду','погулять','сделать домашку ','посмотреть фильм']
    };
  },
  //описание компонента
  template:`<div class="wrapper">
              <first-list :arr="list"></first-list>
              <second-list :arr="list"></second-list>
            </div>`
});



let TaskManager = new Vue({
	el: '#taskManager',
	data: {}
});