import { VALUE_RANGE } from '@/constants/value-rage'

// export const formatValue = (value: number) => {
//   const valueLength = String(value).length

//   if (valueLength < 7) {
//     return `${suffix} ${new Intl.NumberFormat('en-US', {
//       style: 'decimal',
//     }).format(value)}`
//   }

//   const format = VALUE_RANGE.find((range) => {
//     return valueLength >= range.min && valueLength <= range.max
//   })

//   return `$ ${value} ${format?.format || 'XX'}`
// }

export const formatValue = (num: number, preffix: string = '$') => {
  const regex = /\.0+$|(\.[0-9]*[1-9])0+$/

  const item = VALUE_RANGE.slice()
    .reverse()
    .find((item) => num >= item.value)

  if (item) {
    const formattedValue = num / item.value

    return `${preffix} ${formattedValue.toFixed(2).replace(regex, '$1')} ${
      item.symbol
    }`
  }

  return '0'
}
