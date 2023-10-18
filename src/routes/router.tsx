import { BrowserRouter, Routes, Route } from 'react-router-dom'

//All pages
import LoginPage from '../pages/login'
import DashboardPage from '../pages/dashboard'
import BaseLayout from '../components/base-layout'
import RegisterUsersPage from '../pages/register-users'
import PlansPage from '../pages/plans'
import NewPlanPage from '../pages/plans/new-plan-page'
import UserDataPage from '../pages/register-users/user-data-page'
import SpecialitiesPage from '../pages/specialties'
import NewSpecialtyPage from '../pages/specialties/new-speciality-page'
import NotificationPage from '../pages/notification'
import NewNotificationPage from '../pages/notification/new-notification-page'
import FAQPage from '../pages/faq'
import NewQuestionPage from '../pages/faq/new-question-page'
import VisualizePlanPage from '../pages/plans/visualize-plan-page'

// ---

export default function Router() {
    return (
    <BrowserRouter>
     <Routes>
        <Route index path='/' element={<LoginPage/>} />
        <Route element={<BaseLayout/>}>
           <Route path='/dashboard' element={<DashboardPage/>} />
           <Route path='/usuarios-cadastrados' element={<RegisterUsersPage/>} />
           <Route path='/dados-do-usuario' element={<UserDataPage/>} />
           <Route path='/planos' element={<PlansPage/>} />
           <Route path='/novo-plano' element={<NewPlanPage/>} />
           <Route path='/visualizar-plano' element={<VisualizePlanPage/>} />
           <Route path='/especialidades' element={<SpecialitiesPage/>} />
           <Route path='/nova-especialidade' element={<NewSpecialtyPage />} />
           <Route path='/notificacoes' element={<NotificationPage />} />
           <Route path='/nova-notificacao' element={<NewNotificationPage />} />
           <Route path='/faq' element={<FAQPage />} />
           <Route path='/novo-faq' element={<NewQuestionPage />} />
        </Route>
        
     </Routes>
    </BrowserRouter>
    )
}