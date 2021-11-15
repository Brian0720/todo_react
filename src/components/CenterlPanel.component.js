import React from "react";
import classnames from "classnames";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
	{ field: "id", headerName: "Id", width: 90 },
	{ field: "name", headerName: "Name", flex: 1 },
	{ field: "category", headerName: "Category", width: 140 },
	{ field: "complete_by", headerName: "Complete By", width: 160 },
];

class CenterPanel extends React.Component {
	onClick = () => {
		const { setIsDetailsVisible } = this.props;

		setIsDetailsVisible();
	};

	onSelectionModelChange = (selectionModel) => {
		const { todos, setTodo } = this.props;

		let selectedTodoItem = todos.find((item) => {
			console.log(item, selectionModel);
			return item.id === selectionModel[0];
		});

		console.log(selectedTodoItem);
		setTodo(selectedTodoItem);
	};

	render() {
		const { todos, isDetailsVisible } = this.props;
		const panelCls = classnames("center-panel", {
			fullWidth: isDetailsVisible !== true,
		});

		return (
			<div className={panelCls}>
				<div style={{ height: 400, width: "100%" }}>
					<DataGrid
						rows={todos}
						columns={columns}
						pageSize={5}
						rowsPerPageOptions={[5]}
						// disableMultipleSelection={false}
						onSelectionModelChange={this.onSelectionModelChange}
					/>
				</div>
			</div>
		);
	}
}

export default CenterPanel;
