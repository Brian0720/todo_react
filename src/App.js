import { useState } from "react";

import "./assets/theme/index.scss";
import "./App.css";
import todoData from "./data/todo.json";
import TopPanel from "./components/TopPanel.component";
import CenterPanel from "./components/CenterlPanel.component";
import DetailsPanel from "./components/DetailsPanel.component";

function App() {
	const [todoItems, setTodoItems] = useState(todoData);
	const [todo, setTodo] = useState();

	const createTodo = (todo) => {
		setTodoItems([...todoItems, todo]);
	};

	const updateTodo = (todo) => {
		setTodoItems(
			todoItems.map((todoItem) => {
				return todoItems.id === todo.id ? todo : todoItem;
			})
		);
	};

	return (
		<div className='App viewport'>
			<TopPanel />
			<CenterPanel todos={todoItems} setTodo={setTodo} />
			{todo && (
				<DetailsPanel
					todo={todo}
					createTodo={createTodo}
					updateTodo={updateTodo}
				/>
			)}
		</div>
	);
}

export default App;
