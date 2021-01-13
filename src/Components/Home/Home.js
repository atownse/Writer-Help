import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Howdy, Writer</h1>
      <h2>Need Help?</h2>
      <div>
        <Link to="/character-creator">
          <button>Create a Character</button>
        </Link>
        <Link to="/archive">
          <button>View Characters</button>
        </Link>
      </div>
    </div>
  )
}
