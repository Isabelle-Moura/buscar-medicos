// Style
import * as S from './style';

// Special Type
import { TableHTMLAttributes } from 'react';

// Component Type
interface Props extends TableHTMLAttributes<HTMLTableElement> {
   tHead: string[]; // Table header (column names)
   tBody: TableRow[]; // Table body (row data)
   onUserClick?: (user: any) => void; // Callback function when a row is clicked
}

// ---

const TableComponent = ({ tHead, tBody, onUserClick }: Props) => {
   return (
      <>
         <S.Table>
            {/* The table header is generated based on the tHead array. */}
            <thead>
               <tr>
                  {tHead.map((columnContent, index) => (
                     <th key={`${index} - th`}>{columnContent}</th>
                  ))}
               </tr>
            </thead>
            {/* It maps each object into the tBody and creates a table row. The data for each row is generated based on the objects' keys and values. */}
            <tbody>
               {tBody.map((info, index) => (
                  // If onUserClick property is provided, it adds click event on table rows.
                  <tr key={`${index} - tr`} onClick={onUserClick ? () => onUserClick(info) : undefined}>
                     {Object.entries(info).map(([key, cell], cellIndex) => key !== 'id' && <td key={`${index}-${cellIndex}`}>{cell}</td>)}
                  </tr>
               ))}
            </tbody>
         </S.Table>
      </>
   );
};

export default TableComponent;
