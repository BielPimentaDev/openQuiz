import React, { useContext, useEffect, useState } from 'react'
import {IAlternatives, questionsObject} from '../../questions'
import { Alternative } from './Question.styles'
import { useNavigate } from "react-router-dom";
import Logo from '../../components/Logo';
import { AppContext, AppContextProvider } from '../../context/AppContext';
import Timer from '../../components/Timer';
import {GrFormNext} from 'react-icons/gr'
 import { db } from '../../firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { shuffleArray } from '../../helpers/shuffleArray';


export  function Main() {
  let navigate = useNavigate()  
  const {userPoints, setUserPoints} = useContext(AppContext)
  const {setQuestionsLength, questionsLength} = useContext(AppContext)
  const {category} = useContext(AppContext)
  const [isFlipped, setIsFlipped] = useState<boolean> (false)  
  const [questions, setQuestions] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const currentQuestion = questions[currentQuestionIndex]
  const categoryRef = collection(db, category)

  const getDatas = async ()=>{
    const data = await getDocs(categoryRef)         
    setQuestions(data.docs.map((doc:any)=> ({
      ...doc.data()      
    
    })))      
    setIsLoading(false)
    setQuestionsLength(Object.keys(questions).length)  
    console.log(questionsLength)    
  }
  
  
  useEffect(()=>{ 
    
    getDatas()  
    console.log(questions)     
    
  },[])

  const maxArrayCheck = () =>{        
    if (currentQuestionIndex == Object.keys(questions).length - 1 ){
      navigate('/congratulations')
    } 
    else {setCurrentQuestionIndex(curr => curr + 1)}
  }

  const alternativeClicked = (isTrue:boolean) =>{
    setIsFlipped(curr => !curr)
    setTimeout(()=> {
      setIsFlipped(curr => !curr)      
      maxArrayCheck()
    }, 800)
    isTrue && setUserPoints(curr=> curr + 1)    
  }

  return (
    <div className='text-center p-2'>
      <Logo/>
    <div>
    {isLoading ? <p>Carregando...</p> : 
    <>
     <h2 className='font-bold text-2xl mt-8 mb-2 text-center'>
     {currentQuestion.title}
      </h2>
     <p className='mb-8 text-xl text-grayLight capitalize text-center'>
    {category}
      </p>

    <div className=''>
      <Timer
        duration={300}  
        timesUp={()=> {
          navigate('/congratulations')
      
          }}/>
    </div>
       <div >        
        <ul>
         {shuffleArray(currentQuestion.alternatives).map((alternative:any, index:any) =>{
          return (
            <li>
              <Alternative key={index} isFlipped={isFlipped} isTrue={alternative.isTrue} onClick={()=> alternativeClicked(alternative.isTrue)}>
                {alternative.text}
              </Alternative>
            </li>
          )
        })}
        </ul>
       </div>
     </>
    }   
     <h3>Pontos: {userPoints}</h3>
    </div>
      </div>
  )
}
