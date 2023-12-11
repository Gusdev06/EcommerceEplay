import { Link } from 'react-router-dom'
import carrinho from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/logo.svg'
import { Cart, HeaderBar, LinkItem, Links, Navigation } from './styles'

const Cabecalho = () => {
  return (
    <HeaderBar>
      <Navigation>
        <img src={logo} alt="EPLAY" />
        <Links>
          <LinkItem>
            <Link to="categories">Categories</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </Navigation>
      <Cart>
        <div>
          <a href="#">0 - Products(s)</a>
          <img src={carrinho} alt="" />
        </div>
      </Cart>
    </HeaderBar>
  )
}
export { Cabecalho }
