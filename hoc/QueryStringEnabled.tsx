import { SFC } from 'react'
import useQuery from 'hooks/useQuery'

interface QueryStringEnabledProps {
  queryKey: string
}

export const queryStringEnabled = ({ queryKey, children }) => {
  const C: SFC<QueryStringEnabledProps> = () => {
    const $query = useQuery(queryKey)
    return $query ? <>{children}</> : null
  }
  return C
}

export default queryStringEnabled
