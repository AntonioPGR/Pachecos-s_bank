import { Button } from 'components/button';
import ImagemHero from 'images/imagem_hero.svg';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className='m-auto p-4 flex gap-12 justify-around items-center h-full max-w-6xl'>
      <article className='max-w-2xl flex flex-col gap-2 items-start content-start'>
        <h1 className='font-highlight text-rosa-100 text-5xl'>
          Pacheco&apos;s Bank
        </h1>
        <h2 className='font-default text-cinza-900 dark:text-cinza-100 text-4xl'>
          <span className='text-azul-500'>Confiança</span>,{' '}
          <span className='text-azul-500'>inovação</span> e{' '}
          <span className='text-azul-500'>liberdade financeira</span>
        </h2>
        <p className='font-default text-cinza-900 text-2xl dark:text-cinza-100'>
          Esqueça dos bancos tradicionais e experimente a autonomia financeira.
          Venha conhecer o nosso banco digital hoje mesmo!
        </p>
        <Button onClick={() => navigate('/cadastro')}>
          Crie sua conta agora!
        </Button>
      </article>
      <div>
        <img
          src={ImagemHero}
          alt='Uma garota encostada em um celular maior que ela exibindo uma carteira digital. Icones de dinheiro e moedas ao fundo'
        />
      </div>
    </main>
  );
};
