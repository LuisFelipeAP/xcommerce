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

export function Modal() {
  const [error, setError] = useState('')
  const [products, setProducts] = useState([])

  function createProduct(event) {
    event.preventDefault()

    fetch('/api/products', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((json) => {
        setProducts((products) => [...products, json.product])
      })
      .catch((e) => {
        setError("Your Product wasn't created. Try again.")
        console.error(e)
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
            <Input id="name" placeholder="Nome do produto" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="sales">Vendas</Label>
            <Input id="sales" placeholder="Quantidade de vendas do produto" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="price">Valor</Label>
            <Input id="price" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="stock">Estoque</Label>
            <Input id="stock" placeholder="Produtos em estoque" />
          </Fieldset>
          <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <Button>Criar produto</Button>
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
