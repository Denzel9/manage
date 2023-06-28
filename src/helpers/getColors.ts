export const color = (status: string) => {
  if (status === 'Текущая') return 'bg-[#C8A1D6]'
  if (status === 'Будущая') return 'bg-[#1286df]'
  if (status === 'Выполнено') return 'bg-[#3ca444]'
  if (status === 'В архиве') return 'bg-[#1E1E1E]'
}
