// Style
import * as S from './style'

// Special Type
import { TableHTMLAttributes } from 'react'

// Component Type
interface Props extends TableHTMLAttributes<HTMLTableElement> {
  tHead: string[]
  tBody: TableRow[]
  onUserClick?: (id: number) => void
}

// ---

const TableComponent = ({ tHead, tBody, onUserClick }: Props) => {
  return (
    <>
      <S.Table>
        <thead>
          <tr>
            {tHead.map((columnContent, index) => (
              <th key={`${index} - th`}>{columnContent}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tBody.map((info, index) => (
            <tr key={`${index} - tr`} onClick={() => onUserClick && onUserClick(info.id)}>
              {Object.entries(info).map(([key, cell], cellIndex) => key !== 'id' && <td key={`${index}-${cellIndex}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </S.Table>
    </>
  )
}

export default TableComponent