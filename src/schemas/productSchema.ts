export interface Detail {
  id: string
  productId: string
  name: string
  price: number
  description: string
  cover: string
  thumbnail: string
  ingredients: string
}

export interface ProductSchema {
  id: string
  title: string
  details: Detail[]
}
