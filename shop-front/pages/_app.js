import '../styles/globals.css'
import AppSateProvider from 'state/AppStateProvider'

function MyApp({ Component, pageProps }) {
 return <AppSateProvider>
          <Component {...pageProps} />
        </AppSateProvider>
}

export default MyApp
