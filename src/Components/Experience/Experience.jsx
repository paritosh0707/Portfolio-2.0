import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className='experience'>
      <h1 className="title">Experience</h1>

      <div className="timeline-container">
        <div className="time-block">
            <div className="time-place">
                <button>07/2022 - Present</button>
                <div className="place">Data Scientist at Incedo Solutions Ltd</div>
            </div>
            <h2>Intelli-QA</h2>
            <li>Developed a tool that will do detailed analysis of the API and publish the detailed report presenting the API performance</li>
            <li>Created the Framework from scratch for automating the Data operation tasks. </li>
            <li>Create a job that will refresh the data of on-prem SQL server and made it sync with the streaming data. </li>

            <h2>Intell-Doc</h2>
            <li>Created a server for the purpose of validation of the data. </li>
            <li>Responsible for data wrangling tasks and creating data pipelines.</li>
        </div>

        <div className="time-block">
            <div className="time-place">
                <button>01/2022 - 06/2022</button>
                <div className="place">Intern || Data Scientist at Incedo Solutions Ltd</div>
            </div>
            {/* <h2>UI</h2> */}
            <li>Created a fully autorated job that runs daily from Auzre pipelines and gives the seating plan of the employees for the daily cab  roster.</li>
            <li>Responsible for the data automation Tasks using Python.</li>
            <li>Developed a tool to that will do detailed analysis of the APl and published the detailed report presenting the API performance.</li>
            <li>Created the Framework from scratch for automating the Data operation tasks.</li>
            <li>Create a job that willrefresh the data of on-prem SQL server and made it sync with the streaming data.</li>
            <li>Created a server for the purpose of validation of the data.</li>
            <li>Responsible for data wrangling tasks and creating data pipelines.</li>
        </div>
      </div>

    </div>
  )
}

export default Experience
