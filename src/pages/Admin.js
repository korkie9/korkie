import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import MessageCard from '../components/MessageCard'
import { useHistory } from 'react-router-dom'

const Admin = () => {
  const [messages, setMessages] = useState([])
  const [isLoadingMessages, setIsLoadingMessages] = useState(true)
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('auth-token')
    let tokenRes
    const fetchMessages = async () => {
      const res = await Axios.get(process.env.REACT_APP_MESSAGES, {
        headers: {
          'x-auth-token': token,
        },
      })
      const data = await res.data
      setMessages(data)
      setIsLoadingMessages(false)
    }

    const checkLoggedInAndReturnMessages = async () => {
      let token = localStorage.getItem('auth-token')
      if (token === null) {
        localStorage.setItem('auth-token', '')
        token = ''
      }
      try {
        tokenRes = await Axios.post(
          process.env.REACT_APP_TOKEN_IS_VALID,
          null,
          {
            headers: {
              'x-auth-token': token,
            },
          },
        )
      } catch (err) {
        window.alert('You do not have access to this page')
      }
      if (tokenRes.data) {
        try {
          fetchMessages()
        } catch (err) {
          history.push('./Home')
        }
      }
    }
    checkLoggedInAndReturnMessages()
  }, [history])

  const listItems = messages.map((message) => (
    <div key={message._id.toString()}>
      <MessageCard
        name={message.name}
        surname={message.surname}
        email={message.email}
        company={message.company}
        message={message.message}
      />
    </div>
  ))
  return isLoadingMessages ? <div>Loading...</div> : <div>{listItems}</div>
}

export default Admin
