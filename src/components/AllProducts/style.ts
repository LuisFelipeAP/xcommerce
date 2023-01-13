import { styled } from '@stitches/react'

export const Container = styled('div', {
  width: '883px',
})

export const TitleAndNav = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  h2: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
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
      },
    },
  },
})

export const ContentContainer = styled('div', {
  paddingTop: '34px',
})

export const Content = styled('div', {
  height: '701px',
  padding: '30px',
  display: 'flex',
  gap: '31px',
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

export const ProductsBody = styled('table', {
  width: '100%',
  fontFamily: '$default',
  borderSpacing: '0.25rem',
  tableLayout: 'fixed',

  'thead th': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '135%',
    color: '#99A0B0',
    textTransform: 'uppercase',
  },

  'tbody tr:before': {
    content: '.',
    color: 'transparent',
    width: '815px',
    borderTop: '1px solid rgba(0, 0, 0, 0.1);',
    lineHeight: '0px',
    margin: '21px 0 20px',
    display: 'block',
  },
})