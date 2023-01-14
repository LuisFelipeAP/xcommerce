import { createServer, Model } from 'miragejs'
import cuid from 'cuid';

export function makeServer() {
    return createServer({
        models: {
            product: Model,
        },

        seeds(server) {
            server.schema.products.create({ name: "IPhone", price: 2, stock: 2, code: cuid(), sales: 4 })
            server.schema.products.create({ name: "IPhone", price: 2, stock: 2, code: cuid(), sales: 4 });
            server.schema.products.create({ name: "Xiaomi", price: 2, stock: 2, code: cuid(), sales: 4 });
            server.schema.products.create({ name: "Samsumg", price: 2, stock: 2, code: cuid(), sales: 4 });
        },

        routes() {
            this.get('/api/products', (schema) => {
                return schema.products.all()
            })

            this.post('/api/products', (schema, request) => {
                let attrs = JSON.parse(request.requestBody)

                return schema.products.create(attrs)
            })
        }
    })
}
