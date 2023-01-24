import { styled } from '@stitches/react'

export const Container = styled('div', {
  padding: '80px 50px 30px',
  display: 'flex',
  gap: '28.17px',
  backgroundColor: '#FAFAFA',

  '@media(min-width: 320px) and (max-width: 480px)': {
    padding: '30px 20px',
    flexDirection: 'column-reverse',
  },
})
