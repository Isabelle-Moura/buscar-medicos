// Style
import * as S from './style'

// Component Type
interface Props {
  label: string
  checked: boolean
  onChange?: (checked: boolean) => void
}

// ---

const CustomSwitch = ({ label, checked, onChange }: Props) => {
  const handleToggle = () => {
    if (onChange) {
      onChange(!checked)
    }
  }

  return (
    <S.Switch>
      <S.HiddenCheckbox type="checkbox" checked={checked} onChange={handleToggle} />
      <S.Slider checked={checked} />
      <S.Label>{label}</S.Label>
    </S.Switch>
  )
}

export default CustomSwitch