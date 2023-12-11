import { Imagem, Precos, Titulo } from './style'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import { Buttons } from '../buttons'
import { Tag } from '../tags'

export const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
          <Precos>
            De <span>R$250,00</span> <br />
            Por apenas R$99,00
          </Precos>
        </div>

        <Buttons
          type="link"
          to="/products"
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Buttons>
      </div>
    </Imagem>
  )
}
