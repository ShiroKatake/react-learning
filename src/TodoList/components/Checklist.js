import React from 'react'
import reactDom from 'react-dom'

function Checklist() {
    return (
        <div>
            <input type="checkbox" id="clean" name="isHouseCleaned" />
            <label for="clean"> Clean the house</label><br/>

            <input type="checkbox" id="T4" name="isT4Finihsed" />
            <label for="T4"> Finish Task 4</label><br/>
            
            <input type="checkbox" id="meeting" name="isMeetingHosted" />
            <label for="meeting"> Host meeting</label><br/>
        </div>
    )
}

export default Checklist