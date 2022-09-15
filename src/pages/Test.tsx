import { collection, DocumentData, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase-config'


interface IQuestionList{
    title: string,
    alternatives: IAlternatives[]
}

interface IAlternatives{
    isTrue: boolean,
    text: string
}

export default function Test() {
    const [questionsList, setQuestionsList] = useState<DocumentData[]>([])
    const questionsRef = collection(db, 'currentQuestionList')

    // const getQuestions = async ()=>{
    //     const data = await getDocs(questionsRef)
    //     setQuestionsList(data.docs.map(doc => doc.data()))
       
    // }

// useEffect(()=>{
//     getQuestions()
// }, [])

    return (
    <div>
        <div className='flex flex-col items-center justify-center gap-2 '>

            <input className='border p-1' placeholder='Pergunta..'/>
            <input className='border p-1' placeholder='Alternativa correta..'/>
            <input className='border p-1' placeholder='Alternativa errada..'/>
            <input className='border p-1' placeholder='Alternativa errada..'/>
            <input className='border p-1' placeholder='Alternativa errada..'/>
            
        </div>
    </div>
  )
}
