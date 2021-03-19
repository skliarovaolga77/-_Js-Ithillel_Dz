Vue.component('wrapper',{

  data(){
    return {
      tasks:['покушать','помыть посуду','погулять','сделать домашку ','посмотреть фильм'],
      tasks2:[]
    }
  },
  
  template:`<div class="wrapper">
              <first-list :tasks_list="tasks"></first-list>
			        <second-list :tasks_list2="tasks2"></second-list>
            </div>`

}),
Vue.component('first-list',{
  props: {
    tasks_list:{
      type:Array,
      default: []
    }
  },
  template:`<div class="first-list">
              <ul>
                 <li v-for="task in tasks_list">{{task}}</li>
              </ul>
              <button class="transfer" @click="removeItem">transfer</button>
            </div>`,
  methods: {
   removeItem(){
      let addedValue = this.tasks_list.pop();
      this.addItem(addedValue);
    },
    addItem(addedValue){
      console.log(addedValue);
      return addedValue;
    }
  }

}),
Vue.component('second-list',{
   props: {
    tasks_list:{
      type:Array,
      default: []
    }
  },
  template:`<div class="second-list">
              <ul>
                <li v-for="task in tasks_list">{{task}}</li>
              </ul>
            </div>`,
  methods: {
    addItem(addedValue){
    }
  }

})


let taskManager = new Vue({
  el:'#taskManager',
  data:{}
});