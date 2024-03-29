import { ProductContainer, TDContainer } from './style'
import ProductImage from '../../assets/product.jpg'
import Image from 'next/image'
import { useContext } from 'react'
import { ProductInterface, ProductsContext } from '../../context/productContext'
import { EmptyHeartIcon } from '../EmptyHeartIcon'
import { FilledHeartIcon } from '../FilledHeartIcon'

export function ProductComponent({
  name,
  code,
  sales,
  price,
  stock,
}: ProductInterface) {
  const profit = sales * price

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const { favorites, setFavorites } = useContext(ProductsContext)
  const favoriteProduct = favorites.find(
    (product: any) => product.code === code,
  )

  function handleToggleFavorite() {
    if (favoriteProduct) {
      setFavorites(favorites.filter((product) => product !== favoriteProduct))
    } else {
      setFavorites([...favorites, { name, code, sales, price, stock }])
    }
  }

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
                wordBreak: 'break-word',
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
        {formatter.format(price)}
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
          <span style={{ fontWeight: 'bold' }}>
            {profit > 99999
              ? `Total de \n${formatter.format(profit)}`
              : `Total de ${formatter.format(profit)}`}
          </span>
          <span style={{ fontWeight: 'normal' }}>
            {sales < 2 ? `${sales} venda` : `${sales} vendas`}
          </span>
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
        {stock} und.
      </TDContainer>
      <TDContainer
        css={{
          textAlign: 'center',
          verticalAlign: 'middle',
          width: '80px',
        }}
      >
        {favoriteProduct ? (
          <FilledHeartIcon
            onClick={handleToggleFavorite}
            width={24}
            height={24}
            style={{
              cursor: 'pointer',
            }}
          />
        ) : (
          <EmptyHeartIcon
            onClick={handleToggleFavorite}
            width={24}
            height={24}
            style={{
              cursor: 'pointer',
            }}
          />
        )}
      </TDContainer>
    </ProductContainer>
  )
}
