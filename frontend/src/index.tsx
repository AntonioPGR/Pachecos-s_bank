// COMPONENTS
import { AppRouter } from 'routes';
// REACT
import ReactDOM from 'react-dom/client';
// STYLES
import 'styles/tailwind_config.css';
import { Providers } from 'providers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Providers>
    <AppRouter />
  </Providers>
);
