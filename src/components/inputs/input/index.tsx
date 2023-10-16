import { DetailedHTMLProps, InputHTMLAttributes, RefObject } from 'react'
import * as S from './style'

// Interface that defines all props spected in the component
interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string 
  id: string 
  placeholder: string 
  isWrong?: boolean // To check error in field
  icon?: string // To set icon inside the input
  onIcon?: () => void // Callback function to deal with icon click events
  ref?: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined // Input reference 
}

const Input = ({ label, id, placeholder, isWrong, icon, onIcon, ...props }: InputProps) => {

  // Determinates CSS class based on the current state of input
  const classStyle = [props.value ? 'active' : '', isWrong && props.value === '' ? 'error' : '']

  // Determintates input size based on size prop
  const inputSize = {
    width: 'large' ? '320px' : '150px'
  }

  return (
    <>
      {/* Renders the component based on the received properties */}
      <S.InputWrapper className={classStyle.join(' ')}>
        <S.Input style={{ ...inputSize }} {...props} id={id} placeholder={placeholder} />
        <S.Label htmlFor={id}>{label}</S.Label>
        {/* Renders an icon if 'icon' is set, and adds a click function if 'onIcon' is set */}
        {icon && <S.Icon className="icon" onClick={onIcon} src={icon} />}
      </S.InputWrapper>
    </>
  )
}

export default Input
