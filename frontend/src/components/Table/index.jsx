import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = ({ columns = [], rows = [] }) => {
   return (
      <Table>
         <thead>
            <tr>
               {columns.map((column) => (
                  <th key={column.id}>{column.value}</th>
               ))}
            </tr>
         </thead>
         <tbody>
            {rows.length ? rows.map((row) => (
               <tr key={row.id}>
                  {columns.map((column) => (
                     <td key={column.id}>{row[column.id]}</td>
                  ))}
               </tr>
            )) : <span className="center">Não há agendamentos registrados na base de dados.</span>}
         </tbody>
      </Table>
   );
};

export default TableComponent;