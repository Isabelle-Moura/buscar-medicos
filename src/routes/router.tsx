import { BrowserRouter, Routes, Route } from 'react-router-dom';

//All pages
// Dashboard + Profile
import DashboardPage from '../pages/dashboard';

// RegisteredUsers
import RegisterUsersPage from '../pages/register-users';
import UserDataPage from '../pages/register-users/user-data-page';

// Login + BaseLayout
import LoginPage from '../pages/login';
import BaseLayout from '../components/base-layout';

// Plans
import PlansPage from '../pages/plans';
import NewPlanPage from '../pages/plans/new-plan-page';
import VisualizePlanPage from '../pages/plans/visualize-plan-page';
import EditPlanPage from '../pages/plans/edit-plan-page';

// Specialties
import SpecialitiesPage from '../pages/specialties';
import NewSpecialtyPage from '../pages/specialties/new-speciality-page';
import VisualizeSpecialtyPage from '../pages/specialties/visualize-speciality-page';
import EditSpecialtyPage from '../pages/specialties/edit-speciality-page';

// Notifications
import NotificationPage from '../pages/notification';
import NewNotificationPage from '../pages/notification/new-notification-page';
import VisualizeNotificationPage from '../pages/notification/visualize-notification-page';
import EditNotificationPage from '../pages/notification/edit-notification-page';

// FAQ
import FAQPage from '../pages/faq';
import NewQuestionPage from '../pages/faq/new-question-page';
import VisualizeQuestionPage from '../pages/faq/visualize-question-page';
import EditQuestionPage from '../pages/faq/edit-question-page';

// ---

export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route index path="/" element={<LoginPage />} />
            <Route element={<BaseLayout />}>
               <Route path="/dashboard" element={<DashboardPage />} />
               <Route path="/usuarios-cadastrados" element={<RegisterUsersPage />} />
               <Route path="/dados-do-usuario" element={<UserDataPage />} />
               <Route path="/planos" element={<PlansPage />} />
               <Route path="/novo-plano" element={<NewPlanPage />} />
               <Route path="/visualizar-plano" element={<VisualizePlanPage />} />
               <Route path="/editar-plano" element={<EditPlanPage />} />
               <Route path="/especialidades" element={<SpecialitiesPage />} />
               <Route path="/nova-especialidade" element={<NewSpecialtyPage />} />
               <Route path="/visualizar-especialidade" element={<VisualizeSpecialtyPage />} />
               <Route path="/editar-especialidade" element={<EditSpecialtyPage />} />
               <Route path="/notificacoes" element={<NotificationPage />} />
               <Route path="/nova-notificacao" element={<NewNotificationPage />} />
               <Route path="/visualizar-notificacao" element={<VisualizeNotificationPage />} />
               <Route path="/editar-notificacao" element={<EditNotificationPage />} />
               <Route path="/faq" element={<FAQPage />} />
               <Route path="/novo-faq" element={<NewQuestionPage />} />
               <Route path="/visualizar-faq" element={<VisualizeQuestionPage />} />
               <Route path="/editar-faq" element={<EditQuestionPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
