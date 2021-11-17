import React from "react";
import classNames from "classnames";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

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
        const { todo } = this.state;
        const { updateTodo } = this.props;

        todo.category = value;

        this.setState({
            todo,
        });

        updateTodo(todo);
    };

    onDateChange = (moment) => {
        const { todo } = this.state;
        const { updateTodo } = this.props;

        todo.complete_by = moment.format("MM/DD/YYYY");

        this.setState({
            todo,
        });

        updateTodo(todo);
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
                    label="Required"
                    value={todo.name}
                    onChange={this.onChange}
                />
                <TextField
                    select
                    label="Category"
                    value={todo.category}
                    onChange={this.onCategoryChange}
                >
                    {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <DatePicker
                        label="Complete By"
                        value={new Date(todo.complete_by)}
                        onChange={this.onDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
        );
    }
}

export default DetailsPanel;
