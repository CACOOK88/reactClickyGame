import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
      <div className="card" onClick={ () => props.handleClick(props.id) }>
        <img alt={props.name} src={props.image} />
      </div>
  )
}
