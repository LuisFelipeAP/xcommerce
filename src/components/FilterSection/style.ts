import { styled } from '@stitches/react'

export const Container = styled('div', {
  width: '427px',
})

export const TitleAndNav = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  select: {
    all: 'unset',
    appearance: 'auto',
    cursor: 'pointer',
    width: 'auto',
    overflow: 'hidden',
    display: 'inline',
    position: 'relative',
    height: '30px',
    border: 'none',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: '125%',
    color: '#061237',
  },

  '& div': {
    display: 'flex',
    gap: '14.17px',

    svg: {
      display: 'flex',
      alignSelf: 'center',
      color: '#235EE7',

      '&:hover': {
        cursor: 'pointer',
        opacity: '0.8',
      },

      '&:active': {
        transform: 'scale(0.90)'
      }
    },
  },
})

export const ContentContainer = styled('div', {
  paddingTop: '34px',
})

export const Content = styled('div', {
  maxHeight: '701px',
  padding: '30px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '21.36px 31px',
  background: '#F3F5F9',
  borderRadius: '8px',
})

export const Pagination = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '17px',
  color: '#636363',
  marginTop: '10px',
})
