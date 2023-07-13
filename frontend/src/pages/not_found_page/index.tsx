import { Warning } from 'components/warning';
import Image404 from 'images/404error.svg';

export const NotFoundPage = () => {
  return (
    <main
      data-testid='notFoundPage'
      className='page_main h-screen flex flex-col items-center justify-center'
    >
      <Warning
        text='Não foi possivel encontrar a página desejada!'
        link={{ label: 'Retorna a pagina principal clicando aqui!', to: '/' }}
        image={Image404}
      />
    </main>
  );
};
