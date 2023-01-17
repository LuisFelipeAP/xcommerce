import { createServer, Model } from 'miragejs'
import cuid from 'cuid'

export function makeServer() {
  return createServer({
    models: {
      product: Model,
    },

    seeds(server) {
      server.schema.products.create({
        name: 'Iphone 14',
        code: 'MLB123456',
        price: 8000,
        sales: 30,
        stock: 3,
      })
      server.schema.products.create({
        name: 'Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular',
        code: cuid.slug(),
        price: 31.67,
        sales: 150,
        stock: 0,
      })
      server.schema.products.create({
        name: 'Oneplus',
        code: cuid.slug(),
        price: 2,
        sales: 4,
        stock: 2,
      })
      server.schema.products.create({
        name: 'Xiaomi',
        code: cuid.slug(),
        price: 2,
        sales: 4,
        stock: 2,
      })
      server.schema.products.create({
        name: 'Samsung',
        code: cuid.slug(),
        price: 2,
        sales: 4,
        stock: 2,
      })
      server.schema.products.create({
        name: 'Motorola',
        code: cuid.slug(),
        price: 2,
        sales: 4,
        stock: 2,
      })
      server.schema.products.create({
        name: 'LG',
        code: cuid.slug(),
        price: 2,
        sales: 4,
        stock: 2,
      })
      server.schema.products.create({
        name: 'Nokia',
        code: cuid.slug(),
        price: 2,
        sales: 4,
        stock: 2,
      })
    },

    routes() {
      this.get('/api/products', (schema) => {
        return schema.products.all()
      })

      this.post('/api/products', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)

        return schema.products.create(attrs)
      })
    },
  })
}
