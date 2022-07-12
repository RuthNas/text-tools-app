import React from 'react'
import Link from 'next/link'

const Page = ({notes}) => (
  <div>
    <h1>Note Index</h1>
    <Link href="/notes[id]" as={`/notes/1`}>
      <a>
        Note 1
      </a>
    </Link>
  </div>
)

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/note`)
  const {data} = await res.json()
  console.log(data)
  return {
    props: 
    {notes: data}
  }
}

export default Page