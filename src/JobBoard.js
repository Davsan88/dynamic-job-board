import React from 'react'

const JobBoard = () => {
    const jobCount = 4  // Declare a variable to hold the current number of jobs
    const companyName = 'The Barn LTD'  // Declare a variable to hold the company name

    // Function to generate a message based on the number of jobs
    function getJobMessage() {
    return jobCount !== 0 ? 
        `Number of jobs available at ${companyName} is ${jobCount}` : 
        `No jobs available at ${companyName}`
    }

    // Function to calculate the expected number of jobs for next week
    function expectedJobs() {
        return `Number of Jobs expected for Nex Week: ${jobCount * 1.5}`
    }

  return (
    <div>
        <h3>Jobs Updates for {companyName}: </h3>
        {/* Display the job message */}
        <p>{getJobMessage()}</p>
        <p>{expectedJobs()}</p>
    </div>
  )
}

export default JobBoard

