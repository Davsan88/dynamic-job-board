import { useState } from 'react'

export const DynamicForm = () => {
    const [inputValue, setInputValue] = useState('')
    const [submittedTasks, setSubmittedTasks] = useState([])

    const handleReset = () => setInputValue('')

    const handleSubmit = () => {
        if (inputValue.trim()) {
            setSubmittedTasks([...submittedTasks, inputValue])
            setInputValue('')
        }
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
            <br />
            <p>Task: {inputValue}</p>
            <button type="button" onClick={handleSubmit}>Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
            <ul>
                {submittedTasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>

        </>
    )
}


