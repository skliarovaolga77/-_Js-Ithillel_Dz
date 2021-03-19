
Vue.component('list',{
  props:{
    list_tasks: {
      default: []
    }
    
  },
  data(){
    return {
      
    }
    
  },
  template:`<div class="list">
              <ul>
                <li v-for="task in list_tasks">{{task}}</li>
              </ul>
              <button class="transfer" @click="removeItem">transfer</button>
            </div>`,
  methods: {
   removeItem(key){
     console.log('hi');
      // this.tasks.splice(key,1);
      // this.addItem();
    },
  }
});

let app = new Vue({
  el:'#taskManager',
  data:{
    tasks:['покушать','помыть посуду','погулять','сделать домашку ','посмотреть фильм']
   
  }
});