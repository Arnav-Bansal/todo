export class apps {
    constructor()
    {
        this.todos=[]
    }
    addTodo = (title, desc) => {
        console.log("I am adding this todo", title, desc)
        let sno=1
       /* if (this.todos == undefined) {
            sno = 0;
        }
        else {
            sno = this.todos[this.todos.length - 1].sno + 1;
        }*/
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        }
        console.log(myTodo);
        this.todos.push(myTodo)
    }

    onDelete = (todo) => {
        this.todos = this.todos.filter((e) => {
            return e == todo;
        });
    }
}
