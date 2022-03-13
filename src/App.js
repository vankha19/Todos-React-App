import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";

function App() {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [edit, setEdit] = useState(null);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return (
        <div className="App">
            <div className="container">
                <div className="app-wrapper">
                    <div>
                        {" "}
                        <Header></Header>
                    </div>
                    <div>
                        <Form
                            input={input}
                            setInput={setInput}
                            todos={todos}
                            setTodos={setTodos}
                            edit={edit}
                            setEdit={setEdit}
                        ></Form>
                    </div>
                    <div>
                        <TodoList
                            todos={todos}
                            setTodos={setTodos}
                            edit={edit}
                            setEdit={setEdit}
                        ></TodoList>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
