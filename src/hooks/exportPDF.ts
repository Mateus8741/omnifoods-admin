// import { ProductSales } from '@/components/topProducts'
// import { fixedColors } from '@/utils/colors'
// import { FormatMoney } from '@/utils/formatMoney'
// import pdfMake from 'pdfmake/build/pdfmake'
// import pdfFonts from 'pdfmake/build/vfs_fonts'

// pdfMake.vfs = pdfFonts.pdfMake.vfs

// interface Product {
//   totalValue: number
//   totalRequests: number
//   salesPerMonth: number
//   salesPerDay: number
//   annualSales: number
//   monthlySales: number
//   topProducts: ProductSales[]
// }

// function exportData({
//   totalValue,
//   totalRequests,
//   salesPerMonth,
//   salesPerDay,
//   annualSales,
//   monthlySales,
//   topProducts,
// }: Product) {
//   const docDefinition = {
//     content: [
//       { text: 'Relatório de Vendas', style: 'header' },
//       {
//         text: `Total de Vendas: ${FormatMoney(totalValue)}`,
//         style: 'subheader',
//       },
//       { text: `Total de Pedidos: ${totalRequests}`, style: 'subheader' },
//       { text: `Vendas do Mês: ${salesPerMonth}`, style: 'subheader' },
//       { text: `Vendas do Dia: ${salesPerDay}`, style: 'subheader' },
//       {
//         text: `Faturamento Anual: ${FormatMoney(annualSales)}`,
//         style: 'subheader',
//       },
//       {
//         text: `Faturamento Mensal: ${FormatMoney(monthlySales)}`,
//         style: 'subheader',
//       },
//       { text: 'Produtos Mais Vendidos', style: 'header' },
//       {
//         table: {
//           headerRows: 1,
//           widths: ['*', '*', '*', '*'],
//           body: [
//             ['#', 'Nome', 'Popularidade', 'Vendas'],
//             ...topProducts.map((product, index) => {
//               const popularityPercentage =
//                 (product.quantity /
//                   Math.max(...topProducts.map((p) => p.quantity))) *
//                 100
//               const color = fixedColors[index % fixedColors.length]

//               return [
//                 { text: `${index + 1}`, style: 'tableData' },
//                 { text: product.productName, style: 'tableData' },
//                 {
//                   text: `${Math.round(popularityPercentage)}%`,
//                   border: [true, true, true, true],
//                   style: 'tableData',
//                 },
//                 {
//                   text: FormatMoney(product.totalSales),
//                   border: [true, true, true, true],
//                   style: { color },
//                 },
//               ]
//             }),
//           ],
//         },
//       },
//     ],
//     styles: {
//       header: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] },
//       subheader: { fontSize: 12, margin: [0, 10, 0, 10] },
//       tableData: { margin: [5, 5, 5, 5] },
//     },
//   }

//   pdfMake
//     .createPdf(docDefinition as unknown as never)
//     .download('relatorio-de-vendas.pdf')
// }

import { ProductSales } from '@/components/topProducts'
import { fixedColors } from '@/utils/colors'
import { FormatMoney } from '@/utils/formatMoney'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs

interface Product {
  totalValue: number
  totalRequests: number
  salesPerMonth: number
  salesPerDay: number
  annualSales: number
  monthlySales: number
  topProducts: ProductSales[]
}

export function useExportData() {
  function exportData({
    totalValue,
    totalRequests,
    salesPerMonth,
    salesPerDay,
    annualSales,
    monthlySales,
    topProducts,
  }: Product) {
    const docDefinition = {
      content: [
        { text: 'Relatório de Vendas', style: 'header' },
        {
          text: `Total de Vendas: ${FormatMoney(totalValue)}`,
          style: 'subheader',
        },
        { text: `Total de Pedidos: ${totalRequests}`, style: 'subheader' },
        { text: `Vendas do Mês: ${salesPerMonth}`, style: 'subheader' },
        { text: `Vendas do Dia: ${salesPerDay}`, style: 'subheader' },
        {
          text: `Faturamento Anual: ${FormatMoney(annualSales)}`,
          style: 'subheader',
        },
        {
          text: `Faturamento Mensal: ${FormatMoney(monthlySales)}`,
          style: 'subheader',
        },
        { text: 'Produtos Mais Vendidos', style: 'header' },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              ['#', 'Nome', 'Popularidade', 'Vendas'],
              ...topProducts.map((product, index) => {
                const popularityPercentage =
                  (product.quantity /
                    Math.max(...topProducts.map((p) => p.quantity))) *
                  100
                const color = fixedColors[index % fixedColors.length]

                return [
                  { text: `${index + 1}`, style: 'tableData' },
                  { text: product.productName, style: 'tableData' },
                  {
                    text: `${Math.round(popularityPercentage)}%`,
                    border: [true, true, true, true],
                    style: 'tableData',
                  },
                  {
                    text: FormatMoney(product.totalSales),
                    border: [true, true, true, true],
                    style: { color },
                  },
                ]
              }),
            ],
          },
        },
      ],
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] },
        subheader: { fontSize: 12, margin: [0, 10, 0, 10] },
        tableData: { margin: [5, 5, 5, 5] },
      },
    }

    pdfMake
      .createPdf(docDefinition as unknown as never)
      .download('relatorio-de-vendas.pdf')
  }

  return { exportData }
}
