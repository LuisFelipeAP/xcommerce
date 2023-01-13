import { createServer } from "miragejs"

export function makeServer() {
    return createServer({
        routes() {
            this.get("/api/products", () => ({
                products: [
                    {
                        name: "Iphone 14",
                        code: "MLB123456",
                        sales: 30,
                        price: 8000,
                        stock: 3
                    },
                    {
                        name: "Iphone 14",
                        code: "MLB123456",
                        sales: 30,
                        price: 8000,
                        stock: 3
                    },
                    {
                        name: "Iphone 14",
                        code: "MLB123456",
                        sales: 30,
                        price: 8000,
                        stock: 3
                    },
                ],
            }))
        },
    })
}
