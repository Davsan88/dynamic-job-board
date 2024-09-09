import { useState } from 'react'

export const DynamicForm = () => {
    const [inputValue, setInputValue] = useState('')
    const [submittedTasks, setSubmittedTasks] = useState([])

    const handleReset = () => setInputValue('')
    
    const handleSubmit = () => {
        setSubmittedTasks([...submittedTasks, inputValue])
    }

    console.log('Component rendered with input:', inputValue)
  
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter task for The Barn"
            />
            <p>Task: {inputValue}</p>
            <button onClick={handleReset}>Reset</button>
        </>
  )
}


