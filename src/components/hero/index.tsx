import banner from '../../assets/images/hogwarts.png'
import { Buttons } from '../buttons'
import { Tag } from '../tags'
import { BannerImg, Infos } from './styles'

const Hero = () => {
  return (
    <BannerImg style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <div>
          <Tag size="small">RPG</Tag>
          <Tag size="small">PS6</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 290,90</span>
            por R$ 249,90
          </p>
          <Buttons
            title="Clique aqui para adicionar um jogo ao carrinho"
            type="button"
            variant="primary"
          >
            Adicionar ao carrinho
          </Buttons>
        </Infos>
      </div>
    </BannerImg>
  )
}

export { Hero }
