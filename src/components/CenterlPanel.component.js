import React from "react";
import classnames from "classnames";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
	{ field: "id", headerName: "Id", width: 90 },
	{ field: "name", headerName: "Name", flex: 1 },
	{ field: "category", headerName: "Category", width: 140 },
	{ field: "complete_by", headerName: "Complete By", width: 160 },
];

class CenterPanel extends React.Component {
	onSelectionModelChange = (selectionModel) => {
		const { onSelectionModelChange } = this.props;

		onSelectionModelChange(selectionModel[0]);
	};

	render() {
		const { todos, selection, isDetailsPanelVisible } = this.props;

		// change classes of the top-level div element
		const panelCls = classnames("center-panel", {
			fullwidth: isDetailsPanelVisible !== true,
		});

		const selectionModel = selection.map((item) => item.id);

		return (
			<div className={panelCls}>
				<DataGrid
					// data source
					rows={todos}
					// columns definition
					columns={columns}
					// page size
					pageSize={20}
					// page size options
					rowsPerPageOptions={[20]}
					// row selection
					selectionModel={selectionModel}
					// row selection handler
					onSelectionModelChange={this.onSelectionModelChange}
				/>
			</div>
		);
	}
}

export default CenterPanel;
