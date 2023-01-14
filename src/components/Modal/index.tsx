import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import {
  Button,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  Fieldset,
  Flex,
  IconButton,
  Input,
  Label,
} from './style'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import cuid from 'cuid'

const registerProductFormSchema = z.object({
  name: z
    .string()
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O nome do produto pode ter apenas letras e hifens.',
    })
    .min(5, { message: 'O nome do produto precisa ter pelo menos 5 letras.' }),
  price: z.number(),
  sales: z.number(),
  stock: z.number(),
})

type RegisterProductFormData = z.infer<typeof registerProductFormSchema>

type registerNewProductName = string
type registerNewProductPrice = number
type registerNewProductSales = number
type registerNewProductStock = number

export function Modal() {
  const [newProductName, setNewProductName] =
    useState<registerNewProductName>('')
  const [newProductPrice, setNewProductPrice] =
    useState<registerNewProductPrice>()
  const [newProductSales, setNewProductSales] =
    useState<registerNewProductSales>()
  const [newProductStock, setNewProductStock] =
    useState<registerNewProductStock>()

  const [products, setProducts] = useState({})

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterProductFormData>({
    resolver: zodResolver(registerProductFormSchema),
  })

  function createProduct() {
    fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({
        name: newProductName,
        code: cuid(),
        price: newProductPrice,
        sales: newProductSales,
        stock: newProductStock,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.product)
      })

    console.log(products)
  }

  async function handleRegisterProduct(data: RegisterProductFormData) {
    console.log(data)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Criar novo</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Novo produto</DialogTitle>
          <Fieldset>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Nome do produto"
              {...register('name')}
              value={newProductName}
              onChange={(event) => setNewProductName(event.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="price">Valor</Label>
            <Input
              id="price"
              {...register('price')}
              placeholder="Valor do produto"
              value={newProductPrice}
              onChange={(event) => setNewProductPrice(event.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="sales">Vendas</Label>
            <Input
              id="sales"
              {...register('sales')}
              placeholder="Quantidade de vendas do produto"
              value={newProductSales}
              onChange={(event) => setNewProductSales(event.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="stock">Estoque</Label>
            <Input
              id="stock"
              {...register('stock')}
              placeholder="Quantidade de produtos em estoque"
              value={newProductStock}
              onChange={(event) => setNewProductStock(event.target.value)}
            />
          </Fieldset>
          <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <Button onClick={createProduct} disabled={isSubmitting}>
                Criar produto
              </Button>
            </Dialog.Close>
          </Flex>
          <Dialog.Close asChild>
            <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
