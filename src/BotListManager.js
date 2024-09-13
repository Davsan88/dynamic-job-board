import { useState } from 'react'

const BotListManager = () => {
    // Step 1: Initialize the bots state with some initial bot objects
    const [bots, setBots] = useState([
        {id: 1, name: 'Bot Mackey', status: 'Running', task: 'Negotiation'},
        {id: 2, name: 'Bot Vendrell', status: 'Running', task: 'Hide'},
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
        id: bots.length + 1,  // Assign a new unique ID
        name: name,
        status: 'Stopped',  // Default status is "Stopped"
        task: task
      }
      setBots([...bots, newBot])
    }

    // Step 5: Function to delete a bot from the list
    const deletBot = (id) => {
      setBots(bots.filter(bot => bot.id !== id))  // Remove the bot with the matching ID
    }

  return (
    <div>
      <h2>Mission Bots from The Barn</h2>
      <ul>
        {/* Step 6: Map through the bots array to display each bot's information */}
        {bots.map(bot => (
          <li key={bot.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h3>{bot.name}</h3>  {/* Display bot's name */}
            <p>ID: {bot.id}</p>  {/* Display bot's ID */}
            <p>Task: {bot.task}</p>  {/* Display bot's task */}
            {/* Step 7: Conditionally style bot status */}
            <p>Status: <span style={{ color: bot.status === 'Running' ? 'green' : 'red'}}>{bot.status}</span></p>
            <button onClick={() => }></button>
            <button onClick={() => }></button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BotListManager
