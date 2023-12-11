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

  p {
    color: ${cores.branca};
    line-height: 22px;
    max-width: 640px;
    font-size: 14px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.branca};
`
