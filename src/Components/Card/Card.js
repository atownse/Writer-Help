import React from 'react'
import { Link } from 'react-router-dom'
// import './Card.css'

export default function Card(props) {
  return (
    <Link>
      <section id={ props.id }>
        <h2>{ props.name }</h2>
        <p>{ props.job || '' }</p>
        <p>{ props.residence || '' }</p>
      </section>
    </Link>
  )
}
