// COMPONENTS
import { SideBar } from 'components/side_bar';
// PAGES
import { AccountPage } from 'pages/account_page';
import { HomePage } from 'pages/home_page';
import { InvestmentsPage } from 'pages/investments_page';
import { LoginPage } from 'pages/login_page';
import { RegisterPage } from 'pages/register_page';
// ROUTER
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <div className='bg-gray-200 dark:bg-gray-800 grid grid-cols-[auto_1fr]'>
      <SideBar />
      <section>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/cadastro' element={<RegisterPage />} />
          <Route path='/conta' element={<AccountPage />} />
          <Route path='/investimentos' element={<InvestmentsPage/>} />
        </Routes>
      </section>
    </div>
  );
};
