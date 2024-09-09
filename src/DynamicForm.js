import { useState } from 'react'

const DynamicForm = () => {
    const [inputValue, setInputValue] = useState('')
  
    return (
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter job description"
    />
  )
}
