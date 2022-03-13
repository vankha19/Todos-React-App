import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, edit, setEdit }) => {
    const inputRef = useRef();
    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((item) =>
            item.id === id ? { title, id, completed } : item
        );
        setTodos(newTodo);
        setEdit("");
    };
    useEffect(() => {
        if (edit) {
            setInput(edit.title);
            inputRef.current.focus();
        } else {
            setInput("");
        }
    }, [setInput, edit]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!edit) {
            setTodos([
                ...todos,
                { id: uuidv4(), title: input, completed: false },
            ]);
            setInput("");
        } else {
            updateTodo(input, edit.id, edit.completed);
        }
    };
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter a todo..."
                className="task-input"
                value={input}
                onChange={onInputChange}
                required
            />
            <button className="button-add" type="submit">
                {edit ? "Ok" : "Add"}
            </button>
        </form>
    );
};

export default Form;
