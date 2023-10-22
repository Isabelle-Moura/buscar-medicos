// Special Type
import { DetailedHTMLProps, RefObject, TextareaHTMLAttributes } from 'react';

// Style
import * as S from './style';

// Component Type
interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
   id: string;
   label: string;
   placeholder: string;
   width?: string;
   ref?: ((instance: HTMLTextAreaElement | null) => void) | RefObject<HTMLTextAreaElement> | null | undefined;
}

// ---

const TextArea = ({ id, label, width, placeholder, ...rest }: Props) => {
   // ...rest allows you to pass all the default properties of a <textarea> element to the rendered element.
   const inputStyle = {
      width: width === 'large' ? '650px' : '320px',
   };

   return (
      <>
         <S.Container>
            <S.Input id={id} style={{ ...inputStyle }} placeholder={placeholder} {...rest} />
            <S.Label htmlFor={id}>{label}</S.Label>
         </S.Container>
      </>
   );
};

export default TextArea;
