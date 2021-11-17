import { useState, useEffect } from "react";

import "./assets/theme/index.scss";
import "./App.css";
import todoData from "./data/todo.json";
import IdGenerator from "./data/IdGenerator";

import TopPanel from "./components/TopPanel.component";
import CenterPanel from "./components/CenterlPanel.component";
import DetailsPanel from "./components/DetailsPanel.component";

const unid = IdGenerator();

function App() {
    const [todoItems, setTodoItems] = useState(todoData);
    const [isDetailsPanelVisible, setIsDetailsPanelVisible] = useState(false);
    const [selection, setSelection] = useState([]);
    const [incompletedTodosCount, setIncompletedTodosCount] = useState(0);

    useEffect(() => {
        const current = new Date();

        // count the number of incompleted todos
        const count = todoItems.reduce((_count, item) => {
            if (new Date(item.complete_by) > current.getTime()) {
                return _count + 1;
            }

            return _count;
        }, 0);

        setIncompletedTodosCount(count);
    }, [todoItems]);

    const showTodo = (todo) => {
        setSelection([todo]);
        setIsDetailsPanelVisible(true);
    };

    const hideTodo = () => {
        setSelection([]);
        setIsDetailsPanelVisible(false);
    };

    const createTodo = () => {
        const newTodo = {
            id: unid(),
            name: "",
            category: "personal",
            complete_by: "",
        };

        console.log(newTodo);
    };

    const updateTodo = (todo) => {
        setTodoItems(
            todoItems.map((todoItem) => {
                return todoItem.id === todo.id ? todo : todoItem;
            })
        );
    };

    const selectTodo = (todoId) => {
        let selectedTodoItem = todoItems.find((item) => {
            return item.id === todoId;
        });

        showTodo(selectedTodoItem);
    };

    const deselectTodo = () => {
        hideTodo();
    };

    const searchTodo = (term) => {
        console.log(term);
    };

    return (
        <div className="App viewport">
            <TopPanel
                todosCount={incompletedTodosCount}
                createTodo={createTodo}
                deselectTodo={deselectTodo}
                searchTodo={searchTodo}
            />
            <CenterPanel
                todos={todoItems}
                selection={selection}
                isDetailsPanelVisible={isDetailsPanelVisible}
                onSelectionModelChange={selectTodo}
            />
            {isDetailsPanelVisible && (
                <DetailsPanel todo={selection[0]} updateTodo={updateTodo} />
            )}
        </div>
    );
}

export default App;
