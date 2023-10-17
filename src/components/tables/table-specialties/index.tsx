// Service
import { getSpecialties } from "../../../services/specialties-service/config"

//Hooks
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// Icons
import VisualizeIcon from '../../../assets/icons/visualize.png'
import VisualizeToolTip from '../../../assets/icons/visualizeTooltip.png'
import EditIcon from '../../../assets/icons/edit.png'
import EditToolTip from '../../../assets/icons/editTooltip.png'
import RemoveIcon from '../../../assets/icons/delete.png'
import RemoveToolTip from '../../../assets/icons/removeTooltip.png'
import IconAndTooltipButton from "../../buttons/small-button-with-icon"

// Components
import DeleteConfirmation from "../../modals/delete-confirmation"
import CustomSwitch from "../../inputs/switch"
import TableComponent from "../table-layout"

// ---

const TableSpecialties = () => {
  const [specialties, setSpecialties] = useState<SpecialtyData[]>([])
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true)
  }

  const navigate = useNavigate()

  const tHeadContent = ["Nome especialidade", "Situação", "Ações"]
  
    useEffect(() => {
        const fetchSpecialties = async () => {
          const result = await getSpecialties()
          const specialtiesFormatted = result?.reduce(
            (acc, crr) => {
              const specialty = {
                name: crr.name,
                enabled: <CustomSwitch checked={crr.enabled} label={crr.enabled ? ' Ativo' : ' Inativo'} />,
                actions: (
                  <div style={{ display: 'flex' }}>
                    <IconAndTooltipButton icon={VisualizeIcon} tooltip={VisualizeToolTip} hover="#EDEDED" />
                    <IconAndTooltipButton icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />
                    <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" onClick={handleDeleteClick} />
                    {showDeleteConfirmation && (
                        <DeleteConfirmation
                          onCancel={() => setShowDeleteConfirmation(false)}
                          onConfirm={() => {
                            setShowDeleteConfirmation(false)
                    }}
                  />
                )}
                  </div>
                ),
              }
              return [...acc, specialty]
            },
            [] as SpecialtyData[]
          )
          setSpecialties(specialtiesFormatted ?? [])
        }
    
        fetchSpecialties()
      }, [navigate])
    
      return (
        <>
          <TableComponent tHead={tHeadContent} tBody={specialties} />
        </>
      )
    }

export default TableSpecialties