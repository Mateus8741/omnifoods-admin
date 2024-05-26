interface ProductOrder {
  id?: string
  productName: string
  productPrice: number
  quantity: number
  orderId?: string
}

export interface Order {
  id?: string
  tableNumber: number
  changeToOrder?: string
  status: 'PENDING' | 'PREPARING' | 'COMPLETED'
  createdAt?: string
  productOrders: ProductOrder[]
}
