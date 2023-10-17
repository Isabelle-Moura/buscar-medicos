// Icons
import VisualizeIcon from '../../../assets/icons/visualize.png'
import VisualizeToolTip from '../../../assets/icons/visualizeTooltip.png'
import EditIcon from '../../../assets/icons/edit.png'
import EditToolTip from '../../../assets/icons/editTooltip.png'
import RemoveIcon from '../../../assets/icons/delete.png'
import RemoveToolTip from '../../../assets/icons/removeTooltip.png'

// Hooks
import { useEffect, useState, ReactNode } from "react"

// Table Service
import { getNotifications } from "../../../services/notification-service/config"

// Components
import IconAndTooltipButton from "../../buttons/small-button-with-icon"
import TableComponent from '../table-layout'

// Component Type
interface NotificationsData {
    title: string,
    sendingDate: string
    actions: ReactNode
}

interface Props {
    selectedCategory: string
}

// ---

const TableNotification = ({ selectedCategory }: Props) => {
    const [allNotifications, setAllNotifications] = useState<NotificationsData[]>([])
    
    const tHeadContent = ['Título', 'Data de envio', 'Ações']

    useEffect(() => {
        const getAllNotifications = async () => {
            const notifications = await getNotifications(selectedCategory)
            let notesFormatted: NotificationsData[] = [] 

            if (notifications) {
                notesFormatted = notifications?.reduce((acc, crr) => {
                    const notification: NotificationsData = {
                        title: crr.title,
                        sendingDate: crr.sendingDate.slice(0, 10),
                        actions: (
                            <div style={{ display: 'flex' }}>
                               <IconAndTooltipButton icon={VisualizeIcon} tooltip={VisualizeToolTip} hover="#EDEDED" />
                               <IconAndTooltipButton icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />
                               <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" />
                            </div> 
                        )
                    }
                    return [...acc, notification]       
                }, [] as NotificationsData[])

                setAllNotifications(notesFormatted)
            }
        }
        getAllNotifications()
    }, [selectedCategory])    

    return (
        <TableComponent tHead={tHeadContent} tBody={allNotifications} />
    )
}

export default TableNotification