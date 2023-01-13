import { styled } from '@stitches/react'

export const Container = styled('div', {
  padding: '30px 50px',
  backgroundColor: '#17223E',
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',

  img: {
    alignSelf: 'center',
  },
})

export const AvatarLabelGroup = styled('div', {
  display: 'flex',
  gap: '15px',

  svg: {
    alignSelf: 'center',
    color: 'white',
  },
})

export const AvatarContainer = styled('div', {
  width: 40,
  height: 40,
  overflow: 'hidden',
  borderRadius: '50%',
})

export const Picture = styled('div', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})
