import React, { useContext, useEffect, useState } from 'react'
import {IAlternatives, questionsObject} from '../../questions'
import { Alternative } from './Question.styles'
import { useNavigate } from "react-router-dom";
import Logo from '../../components/Logo';
import { AppContext, AppContextProvider } from '../../context/AppContext';
import Timer from '../../components/Timer';
import {GrFormNext} from 'react-icons/gr'
export  function Main() {
  let navigate = useNavigate()
  
  const {userPoints, setUserPoints} = useContext(AppContext)
  const {category} = useContext(AppContext)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number> (0)
  const [seconds, setSeconds] = useState<number> (3)

  const [isFlipped, setIsFlipped] = useState<boolean> (false)

const questionsSize = questionsObject[category].length
 
  const changeQuestion = ():void=>{

    if (currentQuestionIndex < questionsSize -1  ){
        setCurrentQuestionIndex(curr => curr +1)
    }
    else{
      navigate("/congratulations")
    }
  }
useEffect(()=>{
  console.log('ok');
}, [currentQuestionIndex])


const time = 500

  const questionClickHandler = (isTrue:boolean) =>{
    setSeconds(0)
    setIsFlipped(true)
    isTrue && setUserPoints(userPoints + 1)
    setTimeout(()=>{
      setIsFlipped(false)
      changeQuestion()
      setSeconds(5)
    }, time)

  }

  const currentQuestion = questionsObject[category][currentQuestionIndex]

  return (
    <div className='text-center p-2'>
      <Logo/>
    <div>

     <h2 className='font-bold text-2xl my-8 text-center'>
      {currentQuestion?.title}  
      </h2>
     <p className='text-xl text-grayLight capitalize text-center'>
    {category}
      </p>
<Timer
  duration={30}
  
  timesUp={()=> {
    navigate('/congratulations')
    
    }}/>



     <ul className='my-8 p-4 '>
     
        
        {currentQuestion?.alternatives.map(alternative =>{
           return(
             <li key={alternative.text}>
               <Alternative onClick={()=>questionClickHandler(alternative.isTrue)} isFlipped={isFlipped} isTrue={alternative.isTrue}>
                 {alternative.text}
               </Alternative>
             </li>
           )
         })}
        
    
     </ul>
     <h3>Pontos: {userPoints}</h3>
    </div>
      </div>
  )
}
