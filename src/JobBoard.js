import React from 'react'

const JobBoard = () => {
    const jobCount = 4
    const companyName = 'The Barn LTD'

    function getJobMessage() {
    return jobCount !== 0 ? 
        `Number of jobs available at ${companyName} is ${jobCount}` : 
        `No jobs available at ${companyName}`
    }

  return (
    <div>
      <h1>Jobs Updates for {companyName}: {getJobMessage}</h1>
    </div>
  )
}

export default JobBoard

