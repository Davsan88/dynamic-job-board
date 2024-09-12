import { useState } from 'react'

const BotListManager = () => {
    const [bots, setBots] = useState([
        {id: 1, name: 'Bot Mackey', status: 'Running', task: 'Negotiation'},
        {id: 2, name: 'Bot Vedrell', status: 'Running', task: 'Hide'},
        {id: 3, name: 'Bot Gardocki', status: 'Running', task: 'Interrogation'},
        {id: 4, name: 'Bot Lemansky', status: 'Stopped', task: 'Support'},
    ])

    bots.map([])

  return (
    <div>
      <h2>Mission Bots from The Barn</h2>
    </div>
  )
}

export default BotListManager
