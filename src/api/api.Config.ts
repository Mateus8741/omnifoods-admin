import { LoginSchema } from '@/schemas/loginSchema'
import { Order } from '@/schemas/orderSchema'
import { ProductSchema } from '@/schemas/productSchema'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://omnifoods-back.onrender.com',
})

export function login(data: LoginSchema) {
  return api.post('/auth/login', data)
}

export function getOrders() {
  return api.get<Order[]>('/list-all-orders')
}

export function createProduct(data: unknown) {
  return api.post('/product', data)
}

export function getProducts() {
  return api.get<ProductSchema[]>('/product')
}

export function updateStatus(id: string) {
  return api.put(`/order/${id}/status`, {
    status: 'PREPARING',
  })
}

export function completeStatus(id: string) {
  return api.put(`/order/${id}/status`, {
    status: 'COMPLETED',
  })
}

export function deleteOrder(id: string) {
  return api.delete(`/order/${id}`)
}
