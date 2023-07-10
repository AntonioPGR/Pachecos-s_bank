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