import { styled } from '@stitches/react'
import * as Label from '@radix-ui/react-label'
import * as Separator from '@radix-ui/react-separator'
import * as Toolbar from '@radix-ui/react-toolbar'

export const Container = styled('div', {
  backgroundColor: '#17223E',
  display: 'flex',
  flexDirection: 'column',
})

export const LabelAndSearchBar = styled('div', {
  padding: '60px 50px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  '@media(min-width: 320px) and (max-width: 480px)': {
    flexDirection: 'column',
    padding: '30px 20px',
  },
})

export const PageLabel = styled('h2', {
  fontWeight: '700',
  fontFamily: 'Inter',
  fontSize: '36px',
  lineHeight: '43.57px',
  color: 'white',
})

export const SearchField = styled(Label.Root, {
  width: 427,
  borderRadius: '8px',
  height: 50,
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  svg: {
    color: '#99A0B080',
    margin: '16px 23px',
  },

  '@media(min-width: 320px) and (max-width: 480px)': {
    width: '100%',
    marginTop: '20px',
  },
})

export const Input = styled('input', {
  all: 'unset',
  color: 'black',
  fontFamily: 'Inter',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '20px',
  height: '100%',
})

export const SeparatorRoot = styled(Separator.Root, {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',

  '&[data-orientation=horizontal]': {
    width: 'calc(100% - 100px)',
    height: 1,
  },
})

export const NavContainer = styled(Toolbar.Root, {
  padding: '33px 50px 32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media(min-width: 320px) and (max-width: 480px)': {
    padding: '30px 20px',
  },
})

export const MainNav = styled('div', {
  display: 'flex',
  gap: '15px',
})

export const Button = styled(Toolbar.Button, {
  all: 'unset',
  padding: '0 10px',
  color: 'white',
  width: 'auto',
  height: '35px',
  backgroundColor: '#D32811',
  borderRadius: '8px',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '20px',
  transition: 'all 0.2s',

  '&:hover': {
    opacity: '0.8',
  },

  '&:active': {
    transform: 'scale(0.90)',
  },
})
