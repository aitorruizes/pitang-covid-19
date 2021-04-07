import React from "react";

const Table = ({ columns = [], rows }) => {
   return (
      <table>
         <thead>
            <tr>
               {columns.map((column) => (
                  <th key={column.id}>{column.value}</th>
               ))}
            </tr>
         </thead>
         <tbody>
            {rows.map((row) => (
               <tr key={row.id}>
                  {columns.map((column) => (
                     <td key={column.id}>{row[column.id]}</td>
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default Table;