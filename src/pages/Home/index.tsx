import diablo from '../../assets/images/diablo.png'
import resident from '../../assets/images/resident.png'
import { Banner } from '../../components/banner'
import { ProductsList } from '../../components/productsList'
import Game from '../../models'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Jogo de ação',
    img: resident,
    infos: ['-10% , R$ 100,00'],
    system: 'PS4',
    tittle: 'Resident Evil'
  },
  {
    id: 1,
    category: 'Ação',
    description: 'Jogo de ação',
    img: resident,
    infos: ['-10% , R$ 100,00'],
    system: 'PS4',
    tittle: 'Resident Evil'
  },
  {
    id: 1,
    category: 'Ação',
    description: 'Jogo de ação',
    img: resident,
    infos: ['-10% , R$ 100,00'],
    system: 'PS4',
    tittle: 'Resident Evil'
  },
  {
    id: 1,
    category: 'Ação',
    description: 'Jogo de ação',
    img: resident,
    infos: ['-10% , R$ 100,00'],
    system: 'PS4',
    tittle: 'Resident Evil'
  }
]

const Embreve: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Jogo de ação',
    img: diablo,
    infos: ['17/05'],
    system: 'PS4',
    tittle: 'Diablo'
  },
  {
    id: 1,
    category: 'Ação',
    description: 'Jogo de ação',
    img: diablo,
    infos: ['17/05'],
    system: 'PS4',
    tittle: 'Diablo'
  },
  {
    id: 1,
    category: 'Ação',
    description: 'Jogo de ação',
    img: diablo,
    infos: ['17/05'],
    system: 'PS4',
    tittle: 'Diablo'
  },
  {
    id: 1,
    category: 'Ação',
    description: 'Jogo de ação',
    img: diablo,
    infos: ['17/05'],
    system: 'PS4',
    tittle: 'Diablo'
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} tittle="Promoções" background="gray" />
      <ProductsList games={Embreve} tittle="Em breve" background="black" />
    </>
  )
}

export { Home }
