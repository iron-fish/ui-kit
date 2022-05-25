import { FC, ReactType } from 'react'
import useQuery from 'hooks/useQuery'

export interface QueryStringEnabledProps {
  queryKey: string
}

export interface Parent {
  children: ReactType
}

function queryStringEnabled<T>(queryKey: string, C: FC<T>) {
  const _HOC: FC<T> = (props: T & Parent) => {
    const { children } = props
    const $query = useQuery(queryKey)
    return $query ? <C {...props}>{children}</C> : null
  }
  _HOC.displayName = `QSEnabled__${queryKey}`
  return _HOC
}

export default queryStringEnabled
