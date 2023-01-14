import { createServer } from 'miragejs'

export function makeServer() {
  return createServer({
    routes() {
      this.get(
        '/api/products',
        () => [
          {
            name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere atque ad, tempore quae.',
            code: 'MLB123456',
            sales: 30,
            price: 8000,
            stock: 3,
          },
        ],

        this.post('/api/products', (schema, request) => {
          const attrs = JSON.parse(request.requestBody)

          ;(attrs.name = 'IPhone 14'),
            (attrs.code = 'MLB123456'),
            (attrs.sales = 30),
            (attrs.price = 8000),
            (attrs.stock = 3)

          console.log(attrs)
          // return { products: attrs }
        }),
      )
    },
  })
}
