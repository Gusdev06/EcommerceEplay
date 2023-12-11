import Game from '../../models'
import { Products } from '../products'
import { Container, List, Title } from './style'

export type Props = {
  tittle: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, tittle, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{tittle}</Title>
        <List>
          {games.map((game) => {
            return (
              <Products
                key={game.id}
                category={game.category}
                description={game.description}
                img={game.img}
                infos={game.infos}
                system={game.system}
                tittle={game.tittle}
              />
            )
          })}
        </List>
      </div>
    </Container>
  )
}

export { ProductsList }
