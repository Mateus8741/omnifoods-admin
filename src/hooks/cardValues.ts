import { ProductSales } from '@/components/topProducts'
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

function aggregateProductSales(orders: Order[]): ProductSales[] {
  const productSalesMap: { [productName: string]: ProductSales } = {}

  orders.forEach((order) => {
    order.productOrders.forEach((productOrder) => {
      if (!productSalesMap[productOrder.productName]) {
        productSalesMap[productOrder.productName] = {
          productName: productOrder.productName,
          quantity: 0,
          totalSales: 0,
        }
      }
      productSalesMap[productOrder.productName].quantity +=
        productOrder.quantity
      productSalesMap[productOrder.productName].totalSales +=
        productOrder.productPrice * productOrder.quantity
    })
  })

  return Object.values(productSalesMap).sort((a, b) => b.quantity - a.quantity)
}

function calculateAnnualSales(orders: Order[]) {
  const currentYear = new Date().getFullYear()
  const annualSales = orders.reduce((acc, order) => {
    const orderYear = order.createdAt
      ? new Date(order.createdAt).getFullYear()
      : 0
    if (orderYear === currentYear) {
      return (
        acc +
        order.productOrders.reduce((orderAcc, productOrder) => {
          return orderAcc + productOrder.productPrice * productOrder.quantity
        }, 0)
      )
    }
    return acc
  }, 0)
  return annualSales
}

function calculateMonthlySales(orders: Order[]) {
  const currentMonth = new Date().getMonth()
  const monthlySales = orders.reduce((acc, order) => {
    const orderMonth = order.createdAt
      ? new Date(order.createdAt).getMonth()
      : undefined
    if (orderMonth === currentMonth) {
      return (
        acc +
        order.productOrders.reduce((orderAcc, productOrder) => {
          return orderAcc + productOrder.productPrice * productOrder.quantity
        }, 0)
      )
    }
    return acc
  }, 0)

  return monthlySales as number
}

export function getDashboardValues(orders: Order[]) {
  return {
    totalValue: calculateTotalValue(orders),
    totalRequests: calculateTotalRequests(orders),
    salesPerMonth: calculateSalesPerMonth(orders),
    salesPerDay: calculateSalesPerDay(orders),
    topProducts: aggregateProductSales(orders),
    annualSales: calculateAnnualSales(orders),
    monthlySales: calculateMonthlySales(orders),
  }
}
