declare interface ILink{
  id: number,
  to: string,
  label: string,
}

declare interface IMenuLink extends ILink{
  icon: React.ForwardRefExoticComponent
}

declare interface IInputInfo{
  type: HTMLInputTypeAttribute,
  value: any,
  label: string,
  placeholder?: string,
  id: number,
  onChange(value: any): void,
  error_message?: string
}

declare interface IProvider{
  children: TChildren
}

declare interface IUserInfo{
  email: string;
  password: string;
}

declare interface ICompleteUserInfo extends IUserInfo{
  birth_date: string;
  name: string;
}

declare interface IRequestHeaders{
  'Content-type'?: string,
  'Authorization'?: string
}