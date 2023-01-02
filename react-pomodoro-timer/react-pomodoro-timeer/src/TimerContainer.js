import { useState } from 'react'
import Timer from './Timer.js'

function TimerContainer() {

    const [timerLength, setTimerLength] = useState(false)
    const shorter = "25/5"
    const longer = "50/10"

    return(
        <div className="timer-container">
        {/* //Timer component
        //Settings component? Or put settings in the container
         */}
            <Timer />
            <button onClick={() => setTimerLength(!timerLength)}>
                Switch to {timerLength ? shorter : longer}
            </button>
        </div>
    )
}

export default TimerContainer;