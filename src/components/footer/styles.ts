import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  padding: 32px 0;
  background-color: ${cores.cinza};
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  color: ${cores.branca};
  font-weight: bold;
`
export const SectionLinks = styled.ul`
  display: flex;
  padding-top: 16px;
  gap: 8px;
`

export const SectionLinksItem = styled.li`
  a {
    color: ${cores.cinzaClaro};
    font-size: 14px;
  }
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
