import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Red_Hat_Display} from 'next/font/google'

const red_hat_display = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-red-hat',
})

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={`${red_hat_display.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )

}
