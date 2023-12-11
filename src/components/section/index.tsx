import { Container, Title } from './styles'

export type Props = {
  tittle: string
  children: JSX.Element
  background?: string
}

const Section = ({ tittle, children, background }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{tittle}</Title>
        {children}
      </div>
    </Container>
  )
}

export { Section }
