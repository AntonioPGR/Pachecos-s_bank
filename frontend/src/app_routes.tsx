// COMPONENTS
import { SideBar } from 'components/side_bar';
// PAGES
import { HomePage } from 'pages/home_page';
// ROUTER
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <div className='grid grid-cols-[auto_1fr]'>
      <SideBar />
      <section>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </section>
    </div>
  );
};
