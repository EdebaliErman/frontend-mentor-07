import React from 'react'

function Card({
  name,
  paragraph,
  svg,
  color,
  textColor,
  rounded
}) {
  return (
    <div className={`card ${color} ${rounded}`}>
      <span> {svg}</span>
      <h1>{name}</h1>
      <p>{paragraph}</p>
      <button className={` ${textColor} `} >Learn More</button>
    </div>
  )
}

export default Card
