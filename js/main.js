const { createApp } = Vue

createApp({
  data() {
    return {
        newtodo: "",
        todoList: [
        {
            text:`Lavare i piatti`,
            done: true,
        },

        {
            text:`Lavare la macchina`,
            done: false,  
        },

        {          
            text:`Stendere i panni`,
            done: true,
        },

        { 
            text:`Fare la spesa`,
            done: false,
        },

        {
            text:`Pulire casa`,
            done: true ,
        },
      ]
  
    }
  },
  methods: {
      addToDo(){
        this.todoList.push(newtodo);
      },

      removeToDo(i) {
        this.todoList.splice(i, 1);
      },

      change(i) {
        this.todoList[i].done = ! this.todoList[i].done;
      }
  },





}).mount('#app')
