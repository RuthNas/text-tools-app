import React from 'react'
import Link from 'next/link'
import { Button } from 'theme-ui'

const Page = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/notes">
      <a>
        Link
      </a>
    </Link>
    <Button variant='primary'>Button</Button>
    <Button variant='secondary'>Button</Button>
  </div>)

export default Page