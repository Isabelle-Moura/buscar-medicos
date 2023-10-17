// Components
import BackToPageButton from "../../../components/buttons/back-to-page-button"
import LargeButton from "../../../components/buttons/large-button"
import WhiteBackground from "../../../components/extras-components/white-background"
import Input from "../../../components/inputs/input"
import CustomSwitch from "../../../components/inputs/switch"
import { ContentTitle } from "../../dashboard/style"
import { StyledText } from "../../register-users/user-data-page/style"

// ---

const NewSpecialtyPage = () => {
  return (
    <>
      <BackToPageButton link="/especialidades" name="Nova especialidade" />
      <WhiteBackground>
        <ContentTitle title="Dados da especialidade" />
        <div style={{ display: 'flex', marginLeft: '10px', alignItems: 'center', justifyContent: 'center' }}>
          <Input id="speciality-title" placeholder="Insira um título para a especialidade." label="Nome" width="large" />
          <div style={{margin: '10px'}}>
            <StyledText style={{margin: '5px 0px 0px 0px'}}>Situação</StyledText>
            <CustomSwitch checked={false} label="Ativo"/>
          </div>
        </div>
        <div style={{ margin: '20px 10px', alignItems: 'center', justifyContent: 'center' }}>
          <LargeButton name="Salvar" type="submit" variant="DEFAULT" />
        </div>
      </WhiteBackground>
    </>
  )
}

export default NewSpecialtyPage
