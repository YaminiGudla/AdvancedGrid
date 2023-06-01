import React from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class YourComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [],
            rowData: []
        };
    }

    componentDidMount() {
        const {arg1} = this.props;
        const {arg2} = this.props;

        const columnDefs = [];
        for (let i = 0; i < arg2; i++) {
            columnDefs.push({ headerName: `Column ${i + 1}`, field: `column${i + 1}` });
        }

        const rowData = [];
        for (let i = 0; i < arg1; i++) {
            const row = {};
            for (let j = 0; j < arg2; j++) {
                row[`column${j + 1}`] = this.getRandomValue();
            }
            rowData.push(row);
        }
        this.setState({columnDefs,rowData});
    }
    
    getRandomValue() {
        const values = ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'];
        const randomIndex = Math.floor(Math.random() * values.length);
        return values[randomIndex];
    }

    render() {
        return (
            <div
                className="ag-theme-alpine"
                style={{
                    height: '500px',
                    width: '1200px'
                }}
            >
                <AgGridReact
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        resizable: true,
                        editable: true,
                        animateRows: true,
                    }}
                    pagination={true}
                    
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                ></AgGridReact>
            </div>
        );
    }
}

export default YourComponent;