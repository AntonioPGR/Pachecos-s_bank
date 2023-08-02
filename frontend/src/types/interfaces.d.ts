declare interface ILink{
  to: string,
  label: string,
}

declare interface ILinkWithId extends ILink{
  id: number
}

declare interface IMenuLink extends ILinkWithId{
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

declare interface IStatement{
  description: string,
  id: number,
  value: number
}

declare interface IInvestment{
  current_value: number,
  invested_value: number
}

declare interface IBalance{
  balance: number
}


declare interface IAPIError{
  message: string
  status: number | undefined
}