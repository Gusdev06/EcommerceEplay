import {
  Container,
  FooterSection,
  SectionLinks,
  SectionLinksItem,
  SectionTitle
} from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <SectionLinks>
            <SectionLinksItem>
              <a href="#">RPG</a>
            </SectionLinksItem>
            <SectionLinksItem>
              <a href="#">Ação</a>
            </SectionLinksItem>
            <SectionLinksItem>
              <a href="#">Aventura</a>
            </SectionLinksItem>
            <SectionLinksItem>
              <a href="#">Esportes</a>
            </SectionLinksItem>
            <SectionLinksItem>
              <a href="#">Simulação</a>
            </SectionLinksItem>
            <SectionLinksItem>
              <a href="#">Estratégia</a>
            </SectionLinksItem>
            <SectionLinksItem>
              <a href="#">FPS</a>
            </SectionLinksItem>
          </SectionLinks>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rapido</SectionTitle>
          <SectionLinks>
            <SectionLinksItem>
              <a href="#">Novidades</a>
            </SectionLinksItem>
            <SectionLinksItem>
              <a href="#">Promoções</a>
            </SectionLinksItem>
            <SectionLinksItem>
              <a href="#">Em breve</a>
            </SectionLinksItem>
          </SectionLinks>
        </FooterSection>
        <SectionTitle>
          {currentYear} - &copy; E-PLAY Todos os direitos reservados
        </SectionTitle>
      </div>
    </Container>
  )
}

export default Footer
