import React, { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import {
  Button,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  Fieldset,
  Flex,
  FormError,
  IconButton,
  Input,
  Label,
} from './style'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import cuid from 'cuid'
import { Close } from '@radix-ui/react-popover'

const registerProductSchema = z.object({
  name: z
    .string()
    .min(5, { message: "O nome do produto precisa ter pelo menos 5 letras" })
    .max(89, { message: "O nome do produto não pode ter mais do que 90 characteres." })
    .regex(/^([A-Z\a-z\À-ÿ\1-9\.\ \-\:]+)$/gm, { message: "O nome do produto não pode conter characteres especiais"}),
  
  price: z
    .number({
      required_error: "Registrar um valor é obrigatório",
      invalid_type_error: "Insira um valor para o produto",
    })
    .nonnegative({ message: "O valor precisa ser positivo"}),
  
  sales: z
    .number({
      required_error: "Registrar uma venda é obrigatório",
      invalid_type_error: "Insira uma quantidade de venda do produto",
    })
    .nonnegative({ message: "O valor precisa ser positivo"})
    .int({ message: "A quantidade de vendas precisa ser um número inteiro"}),
  
  stock: z
    .number({
      required_error: "Registrar um estoque é obrigatório",
      invalid_type_error: "Insira uma quantidade de estoque do produto",
    })
    .nonnegative({ message: "O valor precisa ser positivo"})
    .int({ message: "A quantidade de estoque do produto precisa ser um número inteiro"}),
})

type RegisterProductData = z.infer<typeof registerProductSchema>

type registerNewProductName = string
type registerNewProductPrice = number
type registerNewProductSales = number
type registerNewProductStock = number

export function Modal() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterProductData>({
    resolver: zodResolver(registerProductSchema),
  })

  const [newProductName, setNewProductName] =
    useState<registerNewProductName>('')
  const [newProductPrice, setNewProductPrice] =
    useState<registerNewProductPrice>()
  const [newProductSales, setNewProductSales] =
    useState<registerNewProductSales>()
  const [newProductStock, setNewProductStock] =
    useState<registerNewProductStock>()

  const [products, setProducts] = useState({})

  async function createProduct() {
    await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({
        name: newProductName,
        code: cuid.slug(),
        price: newProductPrice,
        sales: newProductSales,
        stock: newProductStock,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.product)
      })
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
              type="text"
              {...register('name')}
              placeholder="Nome do produto"
              required
              value={newProductName}
              onChange={(event) => setNewProductName(event.target.value)}
              maxLength={90}
            />
            {errors.name && (
              <FormError>{errors.name?.message}</FormError>
            )}
          </Fieldset>
          <Fieldset>
            <Label htmlFor="price">Valor</Label>
            <Input
              id="price"
              type="number"
              {...register('price', {valueAsNumber: true})}
              placeholder="Valor do produto"
              required
              value={newProductPrice}
              onChange={(event) => setNewProductPrice(event.target.value)}
            />
            {errors.price && (
              <FormError>{errors.price?.message}</FormError>
            )}
          </Fieldset>
          <Fieldset>
            <Label htmlFor="sales">Vendas</Label>
            <Input
              id="sales"
              type="number"
              {...register('sales', {valueAsNumber: true})}
              placeholder="Quantidade de vendas do produto"
              required
              value={newProductSales}
              onChange={(event) => setNewProductSales(event.target.value)}
            />
            {errors.sales && (
              <FormError>{errors.sales?.message}</FormError>
            )}
          </Fieldset>
          <Fieldset>
            <Label htmlFor="stock">Estoque</Label>
            <Input
              id="stock"
              type="number"
              {...register('stock', {valueAsNumber: true})}
              placeholder="Quantidade de produtos em estoque"
              required
              value={newProductStock}
              onChange={(event) => setNewProductStock(event.target.value)}
            />
            {errors.stock && (
              <FormError>{errors.stock?.message}</FormError>
            )}
          </Fieldset>
          <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <Button onClick={handleSubmit(createProduct)} disabled={isSubmitting}>
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
