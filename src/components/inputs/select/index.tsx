// Special Type
import { DetailedHTMLProps, RefObject, SelectHTMLAttributes } from 'react';

// Style
import * as S from './style';

// Component Type
interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
   label: string;
   id: string;
   options: string[];
   ref?: ((instance: HTMLSelectElement | null) => void) | RefObject<HTMLSelectElement> | null | undefined;
}

// ---

const Select = ({ label, id, options, ...props }: Props) => {
   return (
      <>
         <S.SelectWrapper>
            <S.Select {...props} id={id}>
               {options.map((item, index) => (
                  <option key={index}>{item}</option> // Maps and renders available options
               ))}
            </S.Select>
            <S.Label htmlFor={id}>{label}</S.Label> {/* Label associated with the selection field */}
         </S.SelectWrapper>
      </>
   );
};

export default Select;
