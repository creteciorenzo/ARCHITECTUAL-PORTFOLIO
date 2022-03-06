import '../styles/globals.css'
import '../styles/AbrilFatface.css'
import theme from '../styles/theme'
import { NextUIProvider } from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
