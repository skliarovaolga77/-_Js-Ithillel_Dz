  Vue.component('wrapper', {

    data() {
      return {
        tasks: ['покушать', 'помыть посуду', 'погулять', 'сделать домашку ', 'посмотреть фильм'],
        tasks2: []
      };
    },

    template: `<div class="wrapper">
              <first-list :tasks_list="tasks" :tasks_list2="tasks2"></first-list>
			        <second-list :tasks_list="tasks" :tasks_list2="tasks2"></second-list>
            </div>`

  }),
  Vue.component('first-list', {
    props: {
      tasks_list: {
        type: Array,
        default: []
      },
      tasks_list2: {
        type: Array,
        default: []
      }
    },
    template: `<div class="first-list">
              <ul>
                 <li v-for="task in tasks_list">{{task}}</li>
              </ul>
              <button class="transfer" @click="removeItem">transfer</button>
            </div>`,
    methods: {
      removeItem() {
        //shift удаляем последний элемент
        let addedValue = this.tasks_list.pop();
        this.tasks_list2.push(addedValue);
      }
    }

  }),
  Vue.component('second-list', {
    props: {
      tasks_list: {
        type: Array,
        default: []
      },
      tasks_list2: {
        type: Array,
        default: []
      }
    },
    template: `<div class="second-list">
              <ul>
                <li v-for="task in tasks_list2">{{task}}</li>
              </ul>
               <button class="transfer" @click="addItem">transfer</button>
            </div>`,
    methods: {
      addItem() {
        console.log(this.tasks_list2);
        //shift удаляем первый элемент
        let addedValue = this.tasks_list2.shift();
        this.tasks_list.push(addedValue);
      }
    }

  })


let taskManager = new Vue({
  el: '#taskManager',
  data: {}
});