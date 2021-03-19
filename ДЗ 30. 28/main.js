Vue.component('wrapper',{

  data(){
    return {
      tasks:['покушать','помыть посуду','погулять','сделать домашку ','посмотреть фильм']
    }
  },
  
  template:`<div class="wrapper">
              <first-list :tasks_list="tasks"></first-list>
			        <second-list></second-list>
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
   removeItem(key){
      this.tasks_list.splice(key,1);
      // this.addItem();
    },
  }

}),
Vue.component('second-list',{
  template:`<div class="second-list">
              <ul></ul>
            </div>`

})


let taskManager = new Vue({
  el:'#taskManager',
  data:{}
});