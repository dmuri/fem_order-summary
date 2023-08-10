import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Red_Hat_Display} from 'next/font/google'
import Head from 'next/head'

const red_hat_display = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-red-hat',
})

export default function App({Component, pageProps}: AppProps) {
  return (
  <>
    <Head>
      <title>Frontend Mentor Challenge</title>
    </Head>

    <main className={`${red_hat_display.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  </>
  )

}
