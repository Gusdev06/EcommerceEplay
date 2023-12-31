import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'
import { Card } from '../products/style'
export const Container = styled.section<Omit<Props, 'tittle' | 'games'>>`
  background-color: ${(props) =>
    props.background === 'gray' ? cores.cinza : cores.preta};
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? cores.preta : cores.cinza};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.branca};
`
