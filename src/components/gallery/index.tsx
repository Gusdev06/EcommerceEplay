import { useState } from 'react'
import homemAranha from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/botao-play 1.png'
import close from '../../assets/images/close 1.png'
import zoom from '../../assets/images/mais-zoom 1.png'
import zelda from '../../assets/images/zelda.png'
import { Section } from '../section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: homemAranha
  },
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'video',
    url: homemAranha
  }
]
type Props = {
  name?: string
  defaultCover: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenModal = () => {
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  const getMidiaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMidiaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section tittle="Galeria" background="black">
        <Items>
          {mock.map((item, index) => (
            <Item key={item.url} onClick={handleOpenModal}>
              <img
                src={getMidiaCover(item)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img src={getMidiaIcon(item)} alt="" />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="" />
          </header>
          <img src={homemAranha} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
