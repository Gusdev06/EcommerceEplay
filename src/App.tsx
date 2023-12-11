import { BrowserRouter } from 'react-router-dom'
import { Cabecalho } from './components/Cabecalho'
import Footer from './components/footer'
import Rotas from './routes'
import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Cabecalho />
      </Container>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
