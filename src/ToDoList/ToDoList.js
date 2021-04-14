import React from 'react';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoList:[],
            todo:''
        }
    };

    onValueChange = (e) =>{
        const todo = e.target.value;
        this.setState({todo})
    };

    removeItem = (props)=> {
      this.state.todoList.splice(props, 1)
      this.setState({todoList: this.state.todoList})
    };

    strikeItem = (props)=> {
        this.state.todoList.splice(props, 1)
        this.setState({todoList: this.state.todoList})
    };

    onSubmit=(e)=>{
        e.preventDefault();
        const {todoList,todo}=this.state
        this.setState({todoList:[...todoList,todo]})
        this.setState({todo:''})
    };

    render(){
        const myList=this.state.todoList.map((todo,index)=>(
            <li key={index}>
                {todo}
                <button onClick={()=>this.strikeItem(index)}>Valider</button>
                <button onClick={()=>this.removeItem(index)}>X</button>
            </li>
        ))
        return (
            <div>
                <h1>To Do List</h1>
                <form onSubmit={this.onSubmit}>
                    <input 
                        value={this.state.todo}
                        onChange={this.onValueChange}
                    />
                        <button onClick={this.onSubmit}>Ajouter une tâche</button>
                </form>
                <ol>
                    {myList}
                </ol>
            </div>
        )
    };
};

export default TodoList;