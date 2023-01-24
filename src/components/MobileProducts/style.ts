import { styled } from '@stitches/react'

export const Container = styled('div', {
    overflow: 'hidden',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 12px',
    background: 'white',
    borderRadius: '8px',
})

export const InnerContainer = styled('div', {
    display: 'flex',
	flexWrap: 'nowrap',
	flexDirection: 'column',
    width: '180px',
    height: '300px',
})

export const ImageContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',

    'img': {
        background: 'rgba(0, 0, 0, 0.1)',
        width: '56px',
        height: '37px',
    },
})

export const InfoContainer = styled('div', {
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '10px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})

export const Identification = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '6px',

    'h3': {
        maxWidth: '217px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '135%',
        color: '#235EE7',
        wordBreak: 'break-word',
    },

    'span': {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '20px',
        color: '#6B7183',
    },
})

export const PriceAndSales = styled('div', {
    textAlign: 'left',
    color: '#6B7183',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '135%',
    verticalAlign: 'middle',
})

export const Stock = styled('div', {
    textAlign: 'left',
    width: '75px',
    color: '#6B7183',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '135%',
    verticalAlign: 'middle',
})

export const Favorite = styled('div', {
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '80px',
    margin: '0 auto',

    'svg': {
        width: '24px',
        height: '24px',
        cursor: 'pointer',
    },
})
