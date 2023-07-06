declare interface IMenuLink{
  id: number,
  to: string,
  label: string,
  icon: React.ForwardRefExoticComponent
}

declare interface IInputInfo{
  type: HTMLInputTypeAttribute,
  value: any,
  label: string,
  placeholder?: string,
  id: number,
  onChange: () => void
}