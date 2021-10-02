import '../styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * Test lockdown.
 * 
 * BREAKS for `next dev` because of conflict with dev overlay and dev server
 * logic.
 *
 * WORKS for `next build` because there is no dev overlay or dev server logic to
 * conflict with.
 */
import type global from 'ses'
import '@agoric/install-ses'
// lockdown({});

console.log(harden({ a: 1 }))

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
