import { BrowserRouter, Routes, Route } from 'react-router-dom'

//All pages
import LoginPage from '../pages/login'
import DashboardPage from '../pages/dashboard'

export default function Router() {
    return (
    <BrowserRouter>
     <Routes>
        <Route index path='/' element={<LoginPage/>} />
        <Route path='/dashboard' element={<DashboardPage/>} />
        
     </Routes>
    </BrowserRouter>
    )
}