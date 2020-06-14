import { parseISO, format } from 'date-fns'

export default function Data({ dateString }) {
  const data = parseISO(dateString)
  return <time dateTime={dateString}>{format(data, 'LLLL d, yyyy')}</time>
}
