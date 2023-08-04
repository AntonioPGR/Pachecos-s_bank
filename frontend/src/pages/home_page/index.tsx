import { Button } from 'components/button';
import ImagemHero from 'images/imagem_hero.svg';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main data-testid='homePage' className='page_main flex justify-between'>
      <article className='max-w-2xl flex flex-col gap-2 items-start content-start'>
        <h1 className='font-highlight text-rosa-100 text-4xl sm:text-5xl'>
          Pacheco&apos;s Bank
        </h1>
        <h2 className='font-default text-2xl sm:text-4xl '>
          <span className='text-azul-500'>Confiança</span>,
          <span className='text-azul-500'>inovação</span> e
          <span className='text-azul-500'>liberdade financeira</span>
        </h2>
        <p className='font-default text-base sm:text-lg'>
          Esqueça dos bancos tradicionais e experimente a autonomia financeira.
          Venha conhecer o nosso banco digital hoje mesmo!
        </p>
        <Button
          onClick={() => navigate('/cadastro')}
          data_testid='goToRegisterButton'
        >
          Crie sua conta agora!
        </Button>
      </article>
      <div className='hidden xl:block'>
        <img
          src={ImagemHero}
          alt='Uma garota encostada em um celular maior que ela exibindo uma carteira digital. Icones de dinheiro e moedas ao fundo'
        />
      </div>
    </main>
  );
};
