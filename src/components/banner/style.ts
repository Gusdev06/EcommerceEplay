import styled from 'styled-components'
import { TagContainer } from '../tags/style'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  padding-top: 340px;
  color: #fff;
  position: relative;

  ${TagContainer} {
    position: absolute;
    top: 32px;

    .container {
      padding-top: 340px;
    }
  }
  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`

export const Titulo = styled.h2`
  max-width: 450px;
  font-size: 36px;
`

export const Precos = styled.p`
  margin-top: 24px;
  font-size: 24px;

  span {
    text-decoration: line-through;
  }
`
