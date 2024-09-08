import React, { useState } from 'react'

const JobCounter = () => {
    // Initialize jobCount state with 0
    const [jobCount, setJobCount] = useState(0)    
    
    // Function to handle the "Apply!!!" button click
    const handleAddJob = () => {
        setJobCount(jobCount + 1)  // Increment the jobCount state
        console.log('Job Application Count:', jobCount + 1)  // Log the updated job application count
    }

    // Function to handle the "Delete" button click
    const removeJob = () => {
      if (jobCount > 0) {
        setJobCount(jobCount - 1)  // Decrease the jobCount state
      }
      console.log('Job Application Count:', jobCount - 1)  // Log the updated job application count
    }

    // Function to reset the "Job Applications Count" to "zero"
    const resetJobCount = () => {
      setJobCount(0)  // Reset the jobCount state
      console.log('Job Application Count:', 0)  // Log the updated job application count
    }

    const getJobMessage = () => {
      if (jobCount === 0) return "No jobs available"
      if (jobCount > 0 && jobCount <= 5) return "Few jobs available"
    }

  return (
    <div>
      <h2>Job Applications</h2>
      <p>Job Applications Count: {jobCount}</p>  {/* Display the job application count */}
      <button onClick={handleAddJob}>Apply!!!</button>  {/* Button to add a job application*/}
      <button onClick={removeJob}>Delete a Job</button>  {/* Button to remove a job application*/}
      <button onClick={resetJobCount}>Reset Job Count</button>  {/* Button to reset the job applications count */}
    </div>
  )
}

export default JobCounter
