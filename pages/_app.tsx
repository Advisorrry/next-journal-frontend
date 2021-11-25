import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { theme } from '../theme'
import { AppProps } from 'next/app'

import '../styles/globals.scss'
import 'macro-css'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </MuiThemeProvider>

  )
}

export default MyApp
