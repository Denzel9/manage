const date = new Date()
const year = date.getFullYear()
const month =
  date.getMonth().toString().length === 1 ? `0${date.getMonth()}` : date.getMonth().toString()
const day =
  date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate().toString()
export const currentDate = `${year}/${month}/${day}`
