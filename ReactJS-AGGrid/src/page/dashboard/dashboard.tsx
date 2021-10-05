
import React, {useState} from 'react';
import {AgGridReact, AgGridColumn} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './dashboard.styles.css';
import {DashboardDefaultColDef} from './dashboard.props';
import {sampleData} from '../../data/sample-data';

export function Dashboard() {
  const [gridApi, setGridApi] = useState([]as any);
  const [mockData, setMockData] = useState([]as any);
  const [externalFilter, setExternalFilter] = useState("");

  const onGridReady = (params: any) => {
    console.log(params)
    setGridApi(params.api);
    setMockData(sampleData.data);
  };

  const externalFilterChanged = (vMake: string) => {
    setExternalFilter(vMake);
    gridApi.onFilterChanged();
  };

  const isExternalFilterPresent = () => {
    return true;
  };

  const doesExternalFilterPass = (node: any) => {
    switch (externalFilter) {
      case 'nissan':
        return node.data.vMake === "Nissan";
      case 'mitsubishi':
        return node.data.vMake === "Mitsubishi";
      case 'honda':
        return node.data.vMake === "Honda";
      case 'toyota':
        return node.data.vMake === "Toyota";
      case 'mazda':
        return node.data.vMake === "Mazda";
      case 'subaru':
        return node.data.vMake === "Subaru";
      default:
        return node.data.vMake === "Nissan";
    }
  };

  


  return (


    
    <div className="grid-wrapper">
      <div className="ag-theme-balham" style={{height: 800, width: "100%"}}>


        <div className="test-container">
          <div className="test-header"></div>

        <label>
          <input
                type="radio"
                name="filter"
                id="nissan"
                onChange={() => externalFilterChanged('nissan')}
              />
              Nissan
        </label>
        <label>
          <input
                type="radio"
                name="filter"
                id="mitsubishi"
                onChange={() => externalFilterChanged('mitsubishi')}
              />
              Mitsubishi
        </label>
        <label>
          <input
                type="radio"
                name="filter"
                id="honda"
                onChange={() => externalFilterChanged('honda')}
              />
              Honda
        </label>
        <label>
          <input
                type="radio"
                name="filter"
                id="toyota"
                onChange={() => externalFilterChanged('toyota')}
              />
              Toyota
        </label>
        <label>
          <input
                type="radio"
                name="filter"
                id="mazda"
                onChange={() => externalFilterChanged('mazda')}
              />
              Mazda
        </label>
        <label>
          <input
                type="radio"
                name="filter"
                id="subaru"
                onChange={() => externalFilterChanged('subaru')}
              />
              Subaru
        </label>

        </div>
        {sampleData && sampleData.data.length
          ? <AgGridReact
              rowData={mockData}
              defaultColDef={DashboardDefaultColDef}
              animateRows={true}
              onGridReady={onGridReady}
              isExternalFilterPresent={isExternalFilterPresent}
              doesExternalFilterPass={doesExternalFilterPass}
            >
              {sampleData.config.columnDefs.map((item: any, index: number) => {
                return (
                  <AgGridColumn
                    key={index}
                    headerName={item.headerName}
                    field={item.field}
                    type={item.type}
                    filter={item.filter}
                  />
                );
              })}
            </AgGridReact>
          : <label className="">Record is empty</label>
        }
      </div>
    </div>
  );
}

