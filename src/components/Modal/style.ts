import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '@stitches/react'

export const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 20,

  '&:focus': { outline: 'none' },
})

export const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  marginBottom: '20px',
  color: '#061237',
  fontWeight: 500,
  fontSize: 17,
})

export const Flex = styled('div', { display: 'flex' })

export const Button = styled('button', {
  all: 'unset',
  padding: '0 10px',
  color: 'white',
  height: '35px',
  backgroundColor: '#D32811',
  borderRadius: '8px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '20px',
})

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: 'rgb(243, 245, 249)' },
  '&:focus': { boxShadow: `0 0 0 2px rgb(250, 250, 250)` },
})

export const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15,

  borderRadius: '8px',
  backgroundColor: 'white',
  flexWrap: 'wrap',
})

export const Label = styled('label', {
  fontSize: 15,
  width: 50,
  color: '#061237',
  textAlign: 'left',
})

export const Input = styled('input', {
  all: 'unset',
  width: '100%',
  border: '1px solid #17223E',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  height: 35,

  '&::-webkit-outer-spin-button': {
    appearance: 'none',
    margin: '0',
  },

  '&::-webkit-inner-spin-button': {
    appearance: 'none',
    margin: '0',
  }
})

export const FormError = styled('p', {
  color: '#f75a68',
  fontSize: '14px',
  marginLeft: '80px',
  marginTop: '-5px',
  flexBasis: '100%',
})
