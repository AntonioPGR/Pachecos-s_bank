import { Warning } from 'components/warning';
import UnauthorizedImage from 'images/401Unauthorized.svg';

export const UnauthorizedPage = () => {
  return (
    <main data-testid='accountPage' className='page_main '>
      <Warning
        image={UnauthorizedImage}
        text='A página só esta disponivel para usuários logados!'
        link={{
          to: '/login',
          label: 'Clique aqui para fazer login!',
        }}
      />
    </main>
  );
};
