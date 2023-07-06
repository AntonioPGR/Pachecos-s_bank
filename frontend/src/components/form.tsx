interface IFormProps {
  title: string;
  inputs: IInputInfo[];
}
export const Form = ({ title, inputs }: IFormProps) => {
  return (
    <form className='borderx-2 border-solid border-rosa-100'>
      <h1 className='font-highlight text-rosa-100 font-4xl'>{title}</h1>
      {inputs.map(inputInfo => {
        return (
          <input
            key={inputInfo.id}
            type={inputInfo.type}
            value={inputInfo.value}
            onChange={inputInfo.onChange}
            placeholder={inputInfo.placeholder}
          />
        );
      })}
    </form>
  );
};
