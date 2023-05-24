import React from 'react';
import CheckBox from "./CheckBox.jsx";
import cn from "classname";
import {BsTrash} from "react-icons/all.js";

const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div
            className="flex items-center justify-between rounded-2xl bg-gray-800 p-5 mb-4 w-full">
            <button
                className="flex items-center"
                onClick={() => changeTodo(todo.id)}
            >
                <CheckBox isCompleted={todo.isCompleted}/>
                <span className={cn({
                    'line-through': todo.isCompleted
                })}>{todo.title}
            </span>
            </button>
            <button onClick={() => removeTodo(todo.id)}>
                <BsTrash
                    size={22}
                    className="text-gray-600 hover:text-red-700 transition-colors easy-in-out duration-300"
                />
            </button>
        </div>
    );
};

export default TodoItem;