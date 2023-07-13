import { Link } from 'react-router-dom';

interface WarningProps {
  text: string;
  image?: '*.svg';
  link?: ILink;
}
export const Warning = ({ text, image, link }: WarningProps) => {
  return (
    <section className='h-full text-center items-center justify-center flex flex-col gap-4 '>
      {image && (
        <div className='h-80'>
          <img className='h-full w-full' src={image} alt='' />
        </div>
      )}
      <p>{text}</p>
      {link && (
        <p className='page_redirect_link'>
          <Link to={link.to}>{link.label}</Link>
        </p>
      )}
    </section>
  );
};
