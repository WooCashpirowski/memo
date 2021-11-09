import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    margin: 0;
    color: #fff;
    font-family: 'Mochiy Pop P One', sans-serif;
    font-size: 1em;
    text-align: center;
  }
  .App {
    max-width: 1024px;
    margin: 20px auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0 3em;
    h1 {
      span {
        font-size: 1.3em;
      }
      &.matches {
        span {
          color: #c23866;
        }
      }
    }
    button {
      background: none;
      border: 2px solid #fff;
      padding: 6px 12px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      font-size: 1.75em;
      transition: all 0.5s ease;
      &:hover {
        background: #c23866;
      }
    }
  }


  .grid {
    margin: 20px 0 5px;
    align-content: center;
    justify-items: center;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-row-gap: 12px;
    @media(max-width: 768px) {
      margin: 20px 30px 5px;
    }
  }
`

export default GlobalStyles
