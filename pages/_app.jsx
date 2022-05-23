/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from '../src/components/nav'

export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme} >
    <Component{...pageProps}/>
    <Nav/>
  </ThemeProvider>
  )
}