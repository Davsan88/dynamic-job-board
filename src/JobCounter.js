import React from 'react'

const JobCounter = () => {
     // Disclaimer: This example shows the limitation of using regular variables in React.
    // The job count updates in the console but doesn't reflect on the screen.
    let jobCount = 0    // Variable to track the job count
    
    // Function to handle the "Add Job" button click
    const handleAddJob = () => {
        jobCount += 1
        console.log('Job Application Count:', jobCount)
    }

  return (
    <div>
      <h2>Job Applications</h2>
      <p>Job Applications Count: {jobCount}</p>
      <button onClick={handleAddJob}>Apply!!!</button>
    </div>
  )
}

export default JobCounter
