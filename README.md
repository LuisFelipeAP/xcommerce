# Teste - Xcommerce

A ideia deste teste é avaliar suas capacidades de transformar design em código, seu zelo com o projeto, e sua capacidade técnica. Você deve realizar o teste com Next, todas outras techs são da sua escolha É recomendado usar miragejs para mockar as requests.

Design: https://www.figma.com/file/uxYxUUSeBc8IOX7Pw7e0QH/Teste---XCOMMERCE?node-id=0%3A1&t=vKzDmlfdeFPlRhD0-1

---

Features obrigatórias:
 - Exibir todos os produtos e os produtos mais vendidos
 - Paginação
 - Busca
 - Poder favoritar um produto
 - Alternar exibição entre favoritos e todos produtos
 - Poder criar um novo produto por um modal
 - Mostrar o faturamento do produto e quantos foram vendidos na tabela
 - Atenção a experiência do usuário (ex: toasts de errors)

O que seria um plus:
 - Usar react query para cachear as requests
 - Que os componentes sejam acessíveis. (Você poder usar libs como radixUi para te ajudar nisso)
 - Poder ordenar os produtos

Exemplo de um produto:
{
  name: "Iphone 14",
  code: "MLB123456",
  sales: 30,
  price: 8000,
  stock: 3
}
