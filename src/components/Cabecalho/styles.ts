import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  margin-top: 40px;
  margin-bottom: 80px;
  display: flex;
  border-radius: 16px;
  background-color: ${cores.cinza};
  justify-content: space-between;
  align-items: center;

  a {
    color: ${cores.branca};
  }
`
export const Links = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`

export const Cart = styled.div`
  align-items: center;

  div {
    gap: 8px;
    display: flex;
    align-items: center;
  }
`
