class Game {
  id: number
  category: string
  description: string
  img: string
  infos: string[]
  system: string
  tittle: string

  constructor(
    id: number,
    category: string,
    description: string,
    img: string,
    infos: string[],
    system: string,
    tittle: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.img = img
    this.infos = infos
    this.system = system
    this.tittle = tittle
  }
}

export default Game
