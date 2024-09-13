import { useState } from 'react'

const BotListManager = () => {
    // Step 1: Initialize the bots state with some initial bot objects
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

    // Step 4: Function to add a new bot to the list
    const addBot = (name, task) => {
      const newBot = {
        id: bot.id + 1,  // Assign a new unique ID
        name: name,
        status: 'Stopped',  // Default status is "Stopped"
        task: task
      }
      setBots([...bots, newBot])
    }

    // Step 5: Function to delete a bot from the list
    const deletBot = (id) => {
      setBots(bots.filter(bot => bot.id !== id))
    }

  return (
    <div>
      <h2>Mission Bots from The Barn</h2>
    </div>
  )
}

export default BotListManager
