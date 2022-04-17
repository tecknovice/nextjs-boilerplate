import '../styles/globals.css'
import React, { ReactElement, ReactNode, useCallback, useEffect } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import axios from 'axios'
import { ContextProvider } from '../store/context'
import Wrapper from '../components/wrapper'

axios.defaults.baseURL = 'http://localhost:3001'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

console.log('outside App')

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  console.log('inside App')
  if (typeof window !== 'undefined') {
    const jwt = localStorage.getItem('jwt')
    if (jwt) axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
  }

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ContextProvider>
      <Wrapper>{getLayout(<Component {...pageProps} />)}</Wrapper>
    </ContextProvider>
  )
}
