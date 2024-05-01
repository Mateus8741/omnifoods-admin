import { Order } from '@/schemas/orderSchema'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://omnifoods-back.onrender.com',
})

export function getOrders() {
  return api.get<Order[]>('/list-all-orders')
}
