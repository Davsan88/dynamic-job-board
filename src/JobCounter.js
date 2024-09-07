import React, { useState } from 'react'

const JobCounter = () => {
    // Initialize jobCount state with 0
    const [jobCount, setJobCount] = useState(0)    
    
    // Function to handle the "Apply!!!" button click
    const handleAddJob = () => {
        setJobCount(jobCount + 1)  // Increment the jobCount state
        console.log('Job Application Count:', jobCount + 1)  // Log the updated job application count
    }

    const removeAddJob = () => {
      setJobCount(jobCount - 1)

    }

  return (
    <div>
      <h2>Job Applications</h2>
      <p>Job Applications Count: {jobCount}</p>  {/* Display the job application count */}
      <button onClick={handleAddJob}>Apply!!!</button>  {/* Button to add a job application*/}
      <button onClick={removeAddJob}>Delete a Job</button>
    </div>
  )
}

export default JobCounter
