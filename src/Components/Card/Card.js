import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'

export default function Card({id, name, birthplace, job, residence, height, eyeColor}) {
  return (
      <section id={ id } className="card">
        <h2>{ name }</h2>
        <p>Profession: { job || 'Unknown' }</p>
        <p>Birthplace: { birthplace || 'Unknown' }</p>
        <p>Home: { residence || 'Unknown' }</p>
        <p>Height: { height || 'Unknown' } meters</p>
        <p>Eye Color: { eyeColor || 'Unknown' }</p>
      </section>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  // birthplace: PropTypes.string,
  // job: PropTypes.string,
  // residence: PropTypes.string,
  // height: PropTypes.string,
  // eyeColor: PropTypes.string

  // these props are changing from booleans to strings, I need to ask how I can strictly enforce them to be passed as strings even though the states were set as booleans and are parameters for the api call
}