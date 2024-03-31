import React from 'react'

export default function Cardsegment({icon,websiteName,detail}) {
  return (
    <div className="segment">
    <img src={icon} alt={`${websiteName} Icon`} className="icon" />
    <h3>{websiteName}</h3>
    <p>{detail}</p>
  </div>
  )
}
