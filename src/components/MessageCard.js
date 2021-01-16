import React from 'react'
import './MessageCard.css'

const MessageCard = (props) => {
  return (
    <div
      className="card text-white bg-primary mb-3"
    >
      <div className="card-header message-card">
        {props.name} {props.surname}
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.email}</h5>
        <h5 className="card-title">{props.company}</h5>
        <p className="card-text">{props.message}</p>
      </div>
    </div>
  )
}

export default MessageCard
