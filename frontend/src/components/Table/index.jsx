import React from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";
import "../../styles/table.css";

const TableComponent = ({ columns = [], rows = [] }) => {
   const columnsLength = columns.length;
   let history = useHistory();

   function onRowClick(index) {
      console.log(rows[index]);
      history.push("/paciente/status", { response: rows[index] })
   }

   return (
      <Table>
         <thead>
            <tr className="table-row">
               {columns.map((column) => (
                  <th key={column.id}>{column.value}</th>
               ))}
            </tr>
         </thead>
         <tbody>
            {rows.map((row, rowIndex) => (
               <tr className="table-row" key={rowIndex}>
                  {columns.map((column, columnIndex) =>
                     columnsLength === columnIndex + 1 ? (
                        <td key={column.id}>
                           <button
                              onClick={() => onRowClick(rowIndex)}
                              className="table-button"
                           >
                              Visualizar
                           </button>
                        </td>
                     ) : (
                        <td key={column.id}>{row[column.id]}</td>
                     )
                  )}
               </tr>
            ))}
         </tbody>
      </Table>
   );
};

export default TableComponent;
