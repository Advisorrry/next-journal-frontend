import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { theme } from '../theme'
import { AppProps } from 'next/app'

import '../styles/globals.scss'
import 'macro-css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  )
}

export default MyApp
