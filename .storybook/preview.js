import IronFishUIProvider from 'components/IronFishUIProvider';

export const decorators = [
  (Story) => (
    <IronFishUIProvider>
      <Story />
    </IronFishUIProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}