import React from 'react'

const JobCounter = () => {
    let jobCount = 0    
    
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
