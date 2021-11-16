import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

class TopPanel extends React.Component {
	render() {
		const { deselectTodo } = this.props;

		return (
			<div className='top-panel'>
				<AppBar position='static'>
					<Toolbar>
						<Typography variant='h6' noWrap component='div'>
							Todo App
						</Typography>

						<Stack spacing={2} direction='row'>
							<Button variant='text'>New</Button>
							<Button variant='text' onClick={deselectTodo}>
								Deselect
							</Button>
						</Stack>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default TopPanel;
