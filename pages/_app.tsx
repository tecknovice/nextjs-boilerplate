import '../styles/globals.css'
import React, { ReactElement, ReactNode, useCallback, useEffect } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import axios from 'axios'
import useUser from '../hooks/useUser'
import { ContextProvider } from '../store/context'
import Wrapper from '../components/wrapper'

console.log('_app.tsx')
axios.defaults.baseURL = 'http://localhost:3001'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  
  
  if (typeof window !== 'undefined') {
    const jwt = localStorage.getItem('jwt')
    if (jwt) axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
  }

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ContextProvider>
      {getLayout(
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      )}
    </ContextProvider>
  )
}
