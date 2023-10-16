import { BrowserRouter, Routes, Route } from 'react-router-dom'

//All pages
import LoginPage from '../pages/login'
import DashboardPage from '../pages/dashboard'
import BaseLayout from '../components/base-layout'
import RegisterUsersPage from '../pages/register-users'
import PlansPage from '../pages/plans'
import NewPlanPage from '../pages/plans/new-plan-page'
import UserDataPage from '../pages/register-users/user-data-page'

// ---

export default function Router() {
    return (
    <BrowserRouter>
     <Routes>
        <Route index path='/' element={<LoginPage/>} />
        <Route element={<BaseLayout/>}>
           <Route path='/dashboard' element={<DashboardPage/>} />
           <Route path='/usuarios-cadastrados' element={<RegisterUsersPage/>} />
           <Route path='/dados-do-usuario/:id' element={<UserDataPage/>} />
           <Route path='/planos' element={<PlansPage/>} />
           <Route path='/novo-plano' element={<NewPlanPage/>} />
        </Route>
        
     </Routes>
    </BrowserRouter>
    )
}