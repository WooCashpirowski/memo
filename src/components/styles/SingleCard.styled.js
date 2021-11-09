import styled from 'styled-components'

export const Card = styled.div`
  cursor: pointer;
  position: relative;
  width: 100px;
  div {
    width: 100px;
    &.flipped {
      transition: transform 1s ease;
      img.front {
        transform: rotateY(0deg);
        transition-delay: 0.2s;
      }
      img.back {
        transform: rotateY(90deg);
        transition-delay: 0s;
      }
    }
    img {
      width: 100%;
      display: block;
      border: 2px solid #fff;
      border-radius: 5px;
      transition: transform 1s ease;
      &.front {
        transform: rotateY(90deg);
        transition: all 0.2s ease;
        position: absolute;
      }
      &.back {
        transition: all 0.2s ease;
        transition-delay: 0.2s;
      }
    }
  }
`
