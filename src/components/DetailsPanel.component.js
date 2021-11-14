import React from "react";
import classNames from "classnames";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

class DetailsPanel extends React.Component {
  constructor() {
    super();

    this.state = {
      todoItem: "hello world!",
      category: "personal",
      categories: [
        {
          name: "Personal",
          value: "personal"
        },
        {
          name: "Business",
          value: "business"
        }
      ]
    };
  }

  onCategoryChange = (e) => {
    const { value } = e;

    this.setState({
      category: value
    });
  };

  render() {
    const { isDetailsVisible } = this.props;
    const { category, categories, todoItem } = this.state;
    const panelClassNames = classNames("details-panel", {
      visible: isDetailsVisible
    });

    return (
      <div className={panelClassNames}>
        <TextField
          required
          fullWidth={false}
          label="Required"
          value={todoItem}
          variant="filled"
        />
        <TextField
          select
          fullWidth={false}
          label="Category"
          variant="filled"
          value={category}
        >
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