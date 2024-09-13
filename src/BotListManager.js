import { useState } from 'react'

const BotListManager = () => {
    const [bots, setBots] = useState([
        {id: 1, name: 'Bot Mackey', status: 'Running', task: 'Negotiation'},
        {id: 2, name: 'Bot Vedrell', status: 'Running', task: 'Hide'},
        {id: 3, name: 'Bot Gardocki', status: 'Running', task: 'Interrogation'},
        {id: 4, name: 'Bot Lemansky', status: 'Stopped', task: 'Support'},
    ])

    const triggerJob = (id) => {

        setBots(bots.map(bot =>
          bot.id === id ? { ...bot, status: 'Running' } : bot
        ))
    }

  return (
    <div>
      <h2>Mission Bots from The Barn</h2>
    </div>
  )
}

export default BotListManager
