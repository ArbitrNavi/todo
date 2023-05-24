import React, {useState} from 'react';
import TodoItem from "./items/TodoItem.jsx";
import CreateTodoField from "./items/CreateTodoField.jsx";

const data = [
    {
        id: 1,
        title: "asdjklasdkasj",
        isCompleted: false,
    },
    {
        id: 2,
        title: "asdjklasdkasj",
        isCompleted: false,
    },
    {
        id: 3,
        title: "asdjklasdkasj",
        isCompleted: false,
    },{
        id: 4,
        title: "asdjklasdkasj",
        isCompleted: false,
    },


]

const Home = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t.id != id))
    }

    const addTodo = (title) => {
        setTodos([{
            id: todos.length + 1,
            title,
            isCompleted: false
        }, ...todos])
    }

    console.log(todos)

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl text-center my-6">Задачи</h1>
            <CreateTodoField addTodo={addTodo} />

            {
                todos.map(data => (
                    <TodoItem
                        key={data.id}
                        todo={data}
                        changeTodo={changeTodo}
                        removeTodo={removeTodo}

                    />
                ))
            }
        </div>
    );
};

export default Home;