import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../tags/style'

export const BannerImg = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top: 16px;

  ${TagContainer} {
    margin-right: 8px;
  }

  &::after {
    content: '';
    top: 0;
    left: 0;
    background-color: #000;
    width: 100%;
    height: 100%;
    opacity: 0.56;
    position: absolute;
  }

  .container {
    display: flex;
    position: relative;
    z-index: 1;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  max-width: 293px;
  color: ${cores.branca};
  font-weight: bold;
  padding: 16px;
  background-color: ${cores.preta};

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
