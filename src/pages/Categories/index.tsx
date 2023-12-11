import diablo from '../../assets/images/diablo.png'
import resident from '../../assets/images/resident.png'
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

const Categories = () => {
  return (
    <>
      <ProductsList games={promocoes} tittle="RPG" background="gray" />
      <ProductsList games={Embreve} tittle="AÇÃO" background="black" />
      <ProductsList games={promocoes} tittle="RPG" background="gray" />
      <ProductsList games={Embreve} tittle="TERROR" background="black" />
      <ProductsList games={promocoes} tittle="MUNDO ABERTO" background="gray" />
      <ProductsList games={Embreve} tittle="TERROR" background="black" />
    </>
  )
}

export { Categories }
