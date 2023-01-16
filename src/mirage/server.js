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
        price: 8000,
        stock: 3,
        code: 'MLB123456',
        sales: 30,
      })
      server.schema.products.create({
        name: 'Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular',
        price: 31.67,
        stock: 0,
        code: cuid.slug(),
        sales: 150,
      })
      server.schema.products.create({
        name: 'Oneplus',
        price: 2,
        stock: 2,
        code: cuid.slug(),
        sales: 4,
      })
      server.schema.products.create({
        name: 'Xiaomi',
        price: 2,
        stock: 2,
        code: cuid.slug(),
        sales: 4,
      })
      server.schema.products.create({
        name: 'Samsung',
        price: 2,
        stock: 2,
        code: cuid.slug(),
        sales: 4,
      })
      server.schema.products.create({
        name: 'Motorola',
        price: 2,
        stock: 2,
        code: cuid.slug(),
        sales: 4,
      })
      server.schema.products.create({
        name: 'LG',
        price: 2,
        stock: 2,
        code: cuid.slug(),
        sales: 4,
      })
      server.schema.products.create({
        name: 'Nokia',
        price: 2,
        stock: 2,
        code: cuid.slug(),
        sales: 4,
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
