import { useState } from "react";

import "./assets/theme/index.scss";
import "./App.css";
import todoData from "./data/todo.json";

import TopPanel from "./components/TopPanel.component";
import CenterPanel from "./components/CenterlPanel.component";
import DetailsPanel from "./components/DetailsPanel.component";

function App() {
	const [todoItems, setTodoItems] = useState(todoData);
	const [isDetailsPanelVisible, setIsDetailsPanelVisible] = useState(false);
	const [selection, setSelection] = useState([]);

	const showTodo = (todo) => {
		setSelection([todo]);
		setIsDetailsPanelVisible(true);
	};

	const hideTodo = () => {
		setSelection([]);
		setIsDetailsPanelVisible(false);
	};

	const createTodo = (todo) => {
		setTodoItems([...todoItems, todo]);
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

	return (
		<div className='App viewport'>
			<TopPanel deselectTodo={deselectTodo} />
			<CenterPanel
				todos={todoItems}
				selection={selection}
				isDetailsPanelVisible={isDetailsPanelVisible}
				onSelectionModelChange={selectTodo}
			/>
			{isDetailsPanelVisible && (
				<DetailsPanel
					todo={selection[0]}
					createTodo={createTodo}
					updateTodo={updateTodo}
				/>
			)}
		</div>
	);
}

export default App;
