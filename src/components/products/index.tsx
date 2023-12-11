import { Tag } from '../tags'
import { Card, Description, Infos, Title } from './style'

type Props = {
  tittle: string
  img: string
  description: string
  category: string
  system: string
  infos: string[]
}

const Products = ({
  category,
  tittle,
  img,
  infos,
  system,
  description
}: Props) => {
  return (
    <Card>
      <img src={img} alt={tittle} />
      <Infos>
        {infos.map((info) => (
          <Tag size={'small'} key={info}>
            {info}
          </Tag>
        ))}
      </Infos>
      <Title>{tittle}</Title>
      <Tag size={'small'}>{category}</Tag>
      <Tag size={'small'}>{system}</Tag>
      <Description>{description}</Description>
    </Card>
  )
}

export { Products }

// "//placehold.it/222x250"
