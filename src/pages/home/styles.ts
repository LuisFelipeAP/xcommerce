import { styled } from '@stitches/react'

export const Container = styled('div', {
  width: '1440px',
  margin: '0 auto',

  '@media(min-width: 320px) and (max-width: 480px)': {
    width: '100%',
  },
})
