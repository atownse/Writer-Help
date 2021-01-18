import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div>
      <h1>Howdy, Writer</h1>
      <h2>Need Help?</h2>
      <div className="button-container">
        <Link to="/character-creator">
          <button className="home-buttons">Create a Character</button>
        </Link>
        <Link to="/archive">
          <button className="home-buttons">View Characters</button>
        </Link>
      </div>
    </div>
  )
}
