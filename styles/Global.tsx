import {
  ReactNode,
  useCallback,
  useEffect,
  createContext,
  useContext,
  useState,
} from 'react'
import { ThemeProvider } from '@emotion/react'
import { Theme, THEME, Style, NAMED_COLORS } from 'utils/style'

export const KitState = createContext({
  theme: THEME,
})

type KitState = {
  theme: Theme
}

export function KitStateProvider({
  state,
  children,
}: {
  state: KitState
  children: ReactNode
}) {
  return <KitState.Provider value={state}>{children}</KitState.Provider>
}

export const useKitState = () => {
  const context = useContext(KitState)
  if (!context) {
    throw new Error('useKitState must be used within a KitStateProvider')
  }
  return context
}
export const Themed = ({ children }: { children: ReactNode }) => {
  const data = useKitState()
  return (
    <>
      <Style theme={data.theme} />
      <ThemeProvider theme={data.theme}>{children}</ThemeProvider>
    </>
  )
}
