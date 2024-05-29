import { Order } from '@/schemas/orderSchema'

function calculateTotalValue(orders: Order[]): number {
  return orders.reduce((acc, order) => {
    if (order.status === 'COMPLETED') {
      return (
        acc +
        order.productOrders.reduce((orderAcc, productOrder) => {
          return orderAcc + productOrder.productPrice * productOrder.quantity
        }, 0)
      )
    }
    return acc
  }, 0)
}

function calculateTotalRequests(orders: Order[]): number {
  return orders.length
}

function calculateSalesPerMonth(orders: Order[]): number {
  const currentMonth = new Date().getMonth()
  return orders.reduce((count, order) => {
    if (
      order.createdAt &&
      new Date(order.createdAt).getMonth() === currentMonth
    ) {
      return count + 1
    }
    return count
  }, 0)
}

function calculateSalesPerDay(orders: Order[]): number {
  const currentDay = new Date().getDate()
  return orders.reduce((count, order) => {
    if (order.createdAt && new Date(order.createdAt).getDate() === currentDay) {
      return count + 1
    }
    return count
  }, 0)
}

export function getDashboardValues(orders: Order[]) {
  return {
    totalValue: calculateTotalValue(orders),
    totalRequests: calculateTotalRequests(orders),
    salesPerMonth: calculateSalesPerMonth(orders),
    salesPerDay: calculateSalesPerDay(orders),
  }
}
