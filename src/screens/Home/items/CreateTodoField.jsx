import React, {useState} from 'react';

const CreateTodoField = () => {
    const [title, setTitle] = useState("");

    return (
        <div className="flex items-center justify-between rounded-2xl border-2 border-gray-800 p-5 mb-4 w-full">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                onKeyPress={(e) => e.key === "Enter" && (addTodo(title))}
                className="bg-transparent w-full border-none outline-none"
                placeholder="Введите задачу"
            />
        </div>
    );
};

export default CreateTodoField;