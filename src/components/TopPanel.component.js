import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

class TopPanel extends React.Component {
    constructor(props) {
        super(props);

        const { todosCount } = props;

        this.state = {
            term: "",
            todosCount,
        };
    }

    search = (term) => {
        const { searchTodo } = this.props;

        if (searchTodo) {
            searchTodo(term);
        }
    };

    onChange = (e) => {
        const { term } = this.state;
        const { value } = e.target;

        this.setState(
            {
                term: value,
            },
            () => {
                if (term !== value) {
                    this.search(value);
                }
            }
        );
    };

    onKeyUp = ({ keyCode }) => {
        if (keyCode !== 13) {
            return;
        }

        const { term } = this.state;

        // search when user hits Enter
        this.search(term);
    };

    render() {
        const { createTodo, deselectTodo } = this.props;
        const { term, todosCount } = this.state;

        return (
            <div className="top-panel">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Todo App
                        </Typography>

                        <div className="search-container">
                            <SearchIcon />
                            <input
                                type="Text"
                                className="MuiInputBase-input"
                                placeholder="Search..."
                                value={term}
                                onChange={this.onChange}
                                onKeyUp={this.onKeyUp}
                            />
                        </div>

                        <Stack spacing={2} direction="row">
                            <Button variant="text" onClick={createTodo}>
                                New
                            </Button>
                            <Button variant="text" onClick={deselectTodo}>
                                Deselect
                            </Button>
                        </Stack>

                        <Box sx={{ flexGrow: 1 }} />

                        <IconButton
                            size="large"
                            aria-label={`show ${todosCount} new notifications`}
                            color="inherit"
                        >
                            <Badge badgeContent={todosCount} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default TopPanel;
