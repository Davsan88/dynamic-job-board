import { useState } from 'react'

const BotListManager = () => {
    // Step 1: Initialize the bots state with some initial bot objects.
    const [bots, setBots] = useState([
        {id: 1, name: 'Bot Mackey', status: 'Running', task: 'Negotiation'},
        {id: 2, name: 'Bot Vedrell', status: 'Running', task: 'Hide'},
        {id: 3, name: 'Bot Gardocki', status: 'Running', task: 'Interrogation'},
        {id: 4, name: 'Bot Lemansky', status: 'Stopped', task: 'Support'},
    ])

    // Step 2: Function to trigger a job for a bot and change its status to "Running"
    const triggerJob = (id) => {
        // Step 3: Map through the bots array to update the status of the clicked bot
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
