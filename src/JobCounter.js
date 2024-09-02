import React from 'react'

const JobCounter = () => {
     // Disclaimer: This example shows the limitation of using regular variables in React.
    // The job application count updates in the console but doesn't reflect on the screen.
    let jobCount = 0    // Variable to track the job application count
    
    // Function to handle the "Apply!!!" button click
    const handleAddJob = () => {
        jobCount += 1  // Increment the job application count
        console.log('Job Application Count:', jobCount)  // Log the updated job application count
    }

  return (
    <div>
      <h2>Job Applications</h2>
      <p>Job Applications Count: {jobCount}</p>  {/* Display the job application count */}
      <button onClick={handleAddJob}>Apply!!!</button>  {/* Button to add a job application*/}
    </div>
  )
}

export default JobCounter
