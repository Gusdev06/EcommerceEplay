import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  cinza: '#333',
  preta: '#111',
  branca: '#EEEEEE',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3'
}

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
}

body {
    background: ${cores.preta};
    
}

.container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`