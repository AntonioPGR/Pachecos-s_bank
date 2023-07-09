import Image404 from 'images/404error.svg';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <main
      data-testid='notFoundPage'
      className='page_main h-screen flex flex-col items-center justify-center'
    >
      <section className='text-center flex flex-col gap-4'>
        <div className='h-1/2 '>
          <img className='m-auto h-full' src={Image404} alt='' />
        </div>
        <p>Não foi possivel encontrar a página desejada!</p>
        <p className='page_redirect_link'>
          <Link to={'/'}>Retorna a pagina principal clicando aqui!</Link>
        </p>
      </section>
    </main>
  );
};
