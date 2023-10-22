// Icons
import VisualizeIcon from '../../../assets/icons/visualize.png'
import VisualizeToolTip from '../../../assets/icons/visualizeTooltip.png'
import EditIcon from '../../../assets/icons/edit.png'
import EditToolTip from '../../../assets/icons/editTooltip.png'
import RemoveIcon from '../../../assets/icons/delete.png'
import RemoveToolTip from '../../../assets/icons/removeTooltip.png'

// Table Service
import { getQuestions } from '../../../services/faq-service/config'

// Hooks
import { useEffect, useState, ReactNode } from "react"

// Components
import IconAndTooltipButton from "../../buttons/small-button-with-icon"
import TableComponent from '../table-layout'
import SearchBar from '../../inputs/search-bar'

// Component Type
interface QuestionsData {
    title: string,
    actions: ReactNode
}

interface Props {
    selectedCategory: string
}

// ---

const TableFaq = ({ selectedCategory }: Props) => {
    const [allQuestions, setAllQuestions] = useState<QuestionsData[]>([])
    
    const tHeadContent = ['Título', 'Ações']

    useEffect(() => {
        const getAllQuestions = async () => {
            const questions = await getQuestions(selectedCategory)
            let questionsFormatted: QuestionsData[] = [] 

            if (questions) {
                questionsFormatted = questions?.reduce((acc, crr) => {
                    const question: QuestionsData = {
                        title: crr.title,
                        actions: (
                            <div style={{ display: 'flex' }}>
                               <IconAndTooltipButton icon={VisualizeIcon} tooltip={VisualizeToolTip} hover="#EDEDED" />
                               <IconAndTooltipButton icon={EditIcon} tooltip={EditToolTip} hover="#edf1fc" />
                               <IconAndTooltipButton icon={RemoveIcon} tooltip={RemoveToolTip} hover="#ffe1e1" />
                            </div> 
                        )
                    }
                    return [...acc, question]       
                }, [] as QuestionsData[])

                setAllQuestions(questionsFormatted)
            }
        }
        getAllQuestions()
    }, [selectedCategory])    

    return (
        <>
          <SearchBar />
          <TableComponent tHead={tHeadContent} tBody={allQuestions} />
        </>
    )
}

export default TableFaq