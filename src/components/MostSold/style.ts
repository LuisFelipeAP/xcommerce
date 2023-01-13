import { styled } from '@stitches/react';

export const Container = styled('div', {
    width: '427px',
})

export const TitleAndNav = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    'h2': {
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

        'svg': {
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
    flexWrap: 'wrap',
    gap: '12px 31px',
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
