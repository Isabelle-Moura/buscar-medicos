// Icons
import VisualizeIcon from '../../../assets/icons/visualize.png'
import VisualizeToolTip from '../../../assets/icons/visualizeTooltip.png'
import EditIcon from '../../../assets/icons/edit.png'
import EditToolTip from '../../../assets/icons/editTooltip.png'
import RemoveIcon from '../../../assets/icons/delete.png'
import RemoveToolTip from '../../../assets/icons/removeTooltip.png'

// Hooks 
import { ReactNode, useEffect, useState } from 'react'

// Table Service
import { getPlans } from '../../../services/plans-service/config'

// Components
import TableComponent from '../table-layout'
import CustomSwitch from '../../inputs/switch'
import DeleteConfirmation from '../../modals/delete-confirmation'
import IconAndTooltipButton from '../../buttons/small-button-with-icon'

// Component Type
interface PlansData {
  period: string
  values: string | number
  enabled: ReactNode
  actions: ReactNode
}

// ---

interface Props {
  selectedCategory: string
}

const TablePlans = ({ selectedCategory }: Props) => {
  const [allPlans, setAllPlans] = useState<PlansData[]>([])
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true)
  }

//   const handleVisualizeClick = () => {}

  const tHeadContent = ['Período', 'Valor', 'Situação', 'Ações']

  useEffect(() => {
    const getAllPlans = async () => {
      const plans = await getPlans(selectedCategory)
      let plansFormatted: PlansData[] = []

      if (plans) {
        plansFormatted = plans?.reduce((acc, crr) => {
          const plan: PlansData = {
            period: crr.period.toUpperCase(),
            values: crr.values !== null ? `R$ ${crr.values}, 00` : 'R$ 00,00',
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
            )
          }
          return [...acc, plan]
        }, [] as PlansData[])

        setAllPlans(plansFormatted)
      }
    }

    getAllPlans()
  }, [selectedCategory])

  return (
    <>
      <TableComponent
        tHead={tHeadContent}
        tBody={allPlans}
      />
    </>
  )
}

export default TablePlans