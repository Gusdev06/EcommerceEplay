import { ButtonContainer, ButtonLINK } from './style'

export type Props = {
  type: 'button' | 'link'
  to?: string
  title: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}
export const Buttons = ({
  children,
  title,
  type,
  onClick,
  to,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        variant={variant}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLINK to={to as string} title={title}>
      {children}
    </ButtonLINK>
  )
}
