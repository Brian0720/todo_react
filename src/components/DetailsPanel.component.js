import React from "react";
import classNames from "classnames";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

class DetailsPanel extends React.Component {
	constructor(props) {
		super(props);

		const { todo = {} } = props;
		this.state = {
			todo,
			categories: [
				{
					name: "Personal",
					value: "personal",
				},
				{
					name: "Business",
					value: "business",
				},
			],
		};
	}

	onChange = (e) => {
		const { value } = e.target;
		const { todo } = this.state;
		const { updateTodo } = this.props;

		todo.name = value;

		this.setState({
			todo,
		});

		updateTodo(todo);
	};

	onCategoryChange = (e) => {
		const { value } = e.target;

		this.setState({
			category: value,
		});
	};

	render() {
		const { categories, todo } = this.state;

		// change classes of the top-level div element
		const panelClassNames = classNames("details-panel", {
			visible: true,
		});

		return (
			<div className={panelClassNames}>
				<TextField
					required
					fullWidth={false}
					label='Required'
					value={todo.name}
					variant='filled'
					onChange={this.onChange}
				/>
				<TextField
					select
					fullWidth={false}
					label='Category'
					variant='filled'
					value={todo.category}
					onChange={this.onCategoryChange}>
					{categories.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.name}
						</MenuItem>
					))}
				</TextField>
			</div>
		);
	}
}

export default DetailsPanel;
