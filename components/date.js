import { parseISO, format } from 'date-fns'
import styled from 'styled-components'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
      <StyledDate dateTime={dateString}>
        {format(date, 'LLLL d, yyyy')}
      </StyledDate>
  )
}

const StyledDate = styled.time`
  color: #666;
`