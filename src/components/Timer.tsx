import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import React from 'react'

interface TimerProps{
    duration: number,
    remainingTime?: number,
    timesUp: ()=> void
}

export default function Timer(props: TimerProps) {
  return (
    <div className='w-[20%] mx-auto text-2xl mt-4'>
        <CountdownCircleTimer
        initialRemainingTime={props.remainingTime}
        isPlaying
        duration={props.duration}
        size={80}
        onComplete={()=> {

            props.timesUp()
            return { shouldRepeat: true, delay: 0.5 }
        }
        }
        colors={['#13cb51', '#F7B801', '#A30000']}
        colorsTime={[7, 5, 2]}
       
        >
         {
         ({remainingTime}) => remainingTime
         }   
        </CountdownCircleTimer>
    </div>
  )
}
