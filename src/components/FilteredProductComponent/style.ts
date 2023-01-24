import { styled } from '@stitches/react'

export const Container = styled('div', {
  width: '168px',

  h3: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '135%',
    color: '#235EE7',
  },

  '@media(min-width: 320px) and (max-width: 480px)': {
    width: 'calc(100% / 4)',
    textAlign: 'center',
  },
})

export const ImageContainer = styled('div', {
  height: '148.79px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',

  img: {
    background: 'rgba(0, 0, 0, 0.1)',
  },

  '@media(min-width: 320px) and (max-width: 480px)': {
    height: '70px',

    img: {
      width: '56px',
      height: '36px',
    },
  },
})

export const InfoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '14.1px',

  span: {
    color: '#6B7183',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '135%',
  },

  '@media(min-width: 320px) and (max-width: 480px)': {
    flexDirection: 'column',
    paddintTop: '10px',
  },
})
