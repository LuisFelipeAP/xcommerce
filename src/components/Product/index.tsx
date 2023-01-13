import { ProductContainer, TDContainer } from './style'
import ProductImage from '../../assets/product.jpg'
import Image from 'next/image'
import { HeartIcon } from '@radix-ui/react-icons'

interface ProductInterface {
  name: string,
  code: string,
  sales: number,
  price: number,
  stock: number
}

export function Product({
  name,
  code,
  sales,
  price,
  stock
}: ProductInterface) {

  const profit = sales * price

  return (
    <ProductContainer>
      <TDContainer>
        <div
          style={{
            display: 'flex',
            width: '374px',
          }}
        >
          <div
            style={{
              background: 'white',
              boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              width: '85px',
              height: '85px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              alt="Imagem do produto"
              src={ProductImage}
              style={{
                background: 'rgba(0, 0, 0, 0.1)',
                width: '56px',
                height: '37px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '6px',
              margin: '0 29px',
            }}
          >
            <h3
              style={{
                maxWidth: '217px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '135%',
                color: '#235EE7',
              }}
            >
              {name}
            </h3>
            <span
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '20px',
                color: '#6B7183',
              }}
            >
              #{code}
            </span>
          </div>
        </div>
      </TDContainer>
      <TDContainer
        style={{
          textAlign: 'left',
          width: '105px',
          height: '19px',
          color: '#6B7183',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '135%',
          verticalAlign: 'middle',
        }}
      >
        R$ {price}
      </TDContainer>
      <TDContainer
        style={{
          verticalAlign: 'middle',
          width: '137px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '38px',
            color: '#6B7183',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '135%',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Total de R$ {profit}</span>
          <span style={{ fontWeight: 'normal' }}>{sales}</span>
        </div>
      </TDContainer>
      <TDContainer
        style={{
          textAlign: 'left',
          width: '75px',
          color: '#6B7183',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '135%',
          verticalAlign: 'middle',
        }}
      >
        {stock}
      </TDContainer>
      <TDContainer
        css={{
          textAlign: 'center',
          verticalAlign: 'middle',
          width: '80px',
        }}
      >
        <HeartIcon
          width="24px"
          height="24px"
          style={{
            color: '#101828',
            cursor: 'pointer',
          }}
        />
      </TDContainer>
    </ProductContainer>
  )
}
