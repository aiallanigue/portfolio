import React from 'react';
import {AgGridColumn} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {GridColumnDetailItemProps, GridColumnProps} from './grid-column.props';

export function GridColumn(props: GridColumnProps) {
  console.log(props.refData)
  const renderAgGridColumnItems = () => {
    return props.refData.map((item: GridColumnDetailItemProps, index: number) => {
      console.log(item.headerName)
      return (
        <AgGridColumn
          headerName={item.headerName}
          field={item.field}
          type={item.type}
          filter={item.filter} 
        />
      );
    });
    
  }

  return (
    <>
      {renderAgGridColumnItems}
    </>
  );

}