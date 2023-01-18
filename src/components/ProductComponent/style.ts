import { styled } from '@stitches/react'

export const ProductContainer = styled('div', {
  height: '85px',
  width: '800px',
})

export const TDContainer = styled('td', {
  'svg': {
    '&:hover': {
      cursor: 'pointer',
      opacity: '0.8',
    },

    '&:active': {
      transform: 'scale(0.90)'
    }
  }
})
