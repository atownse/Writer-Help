import React from 'react'
// import './Card.css'

export default function Card({id, name, birthplace, job, residence, height, eyeColor, music, quote, insult}) {
  return (
      <section id={ id }>
        <h2>{ name }</h2>
        <p>Profession: { job || 'Unknown' }</p>
        <p>Birthplace: { birthplace || 'Unknown' }</p>
        <p>Home: { residence || 'Unknown' }</p>
        <p>Height: { height || 'Unknown' }</p>
        <p>Eye Color: { eyeColor || 'Unknown' }</p>
        <p>Favorite music type: { music || 'None' }</p>
        <p>Favorite Quote: { quote || 'None' }</p>
        <p>Favorite Insult: { insult || 'None' }</p>
      </section>
  )
}
