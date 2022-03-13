import React from "react";

const TodoList = ({ todos, setTodos, edit, setEdit }) => {
    const handleDelete = (todo) => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (todo.id === item.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };
    const handleEdit = (todo) => {
        const findTodo = todos.find((item) => item.id === todo.id);
        setEdit(findTodo);
    };
    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input
                        disabled
                        type="text"
                        name=""
                        className={`noselect list ${
                            todo.completed ? "complete" : ""
                        }`}
                        value={todo.title}
                        onChange={(e) => e.preventDefault()}
                    />
                    <div className="button-list">
                        <button
                            className="btn button-complete"
                            onClick={() => handleComplete(todo)}
                        >
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button
                            className="btn button-edit"
                            onClick={() => handleEdit(todo)}
                        >
                            <i className="fa fa-edit"></i>
                        </button>
                        <button
                            className="btn button-delete"
                            onClick={() => handleDelete(todo)}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default TodoList;
