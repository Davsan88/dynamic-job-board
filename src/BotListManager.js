import { useState } from 'react'

const BotListManager = () => {
    const [bots, setBots] = useState([
        {id: 1, name: 'Bot Mackey', status: 'Active', task: 'Negotiation'},
        {id: 2, name: 'Bot Vedrell', status: 'Active', task: 'Hide'},
        {id: 3, name: 'Bot Gardocki', status: 'Active', task: 'Interrogation'},
        

    ])


  return (
    <div>
      <h2>Mission Bots from The Barn</h2>
    </div>
  )
}

export default BotListManager
