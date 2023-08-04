// COMPONENTS
import { SideBar } from 'components/side_bar';
// PAGES
import { AccountPage } from 'pages/account_page';
import { HomePage } from 'pages/home_page';
import { InvestmentsPage } from 'pages/investments_page';
import { LoginPage } from 'pages/login_page';
import { LogoutPage } from 'pages/logout_page';
import { NotFoundPage } from 'pages/not_found_page';
import { RegisterPage } from 'pages/register_page';
import { UnauthorizedPage } from 'pages/unauthorized_page';
// ROUTER
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <div className='min-h-screen bg-gray-200 dark:bg-gray-800 flex flex-col sm:grid sm:grid-cols-[auto_1fr]'>
      <SideBar />
      <section className='flex items-center justify-center w-[calc(100vw-1.032rem)] min-h-[calc(100vh-64px)] p-4 sm:pl-20 md:pl-24 sm:h-screen'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/cadastro' element={<RegisterPage />} />
          <Route path='/conta' element={<AccountPage />} />
          <Route path='/investimentos' element={<InvestmentsPage />} />
          <Route path='/unauthorized' element={<UnauthorizedPage />} />
          <Route path='/logout' element={<LogoutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </section>
    </div>
  );
};
