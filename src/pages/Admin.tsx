import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, {useState, useEffect} from 'react'
import Logo from '../components/Logo'
import { db } from '../firebase/firebase-config'

export default function Admin() {
    const [suggestionsQuestions, setSuggestionsQuestions] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const suggestionsRef = collection(db, "suggestionsList")
    const getDatas = async ()=>{
        const data = await getDocs(suggestionsRef)         
        setSuggestionsQuestions(data.docs.map((doc:any)=> ({...doc.data(), id: doc.id})))      
             
      }
    interface IQuestion {
        id: string,
        category: string,
        title: string,
        alternatives : {text: string, isTrue:boolean}[]
    }

    const deleteQuestion = async (id:any) =>{
        const questionDoc = doc(db, 'suggestionsList',id)
        deleteDoc(questionDoc)
    
    }

    const createQuestion = async (questionObj:IQuestion)=>{
        const collectionRef = collection(db, questionObj.category )
        await addDoc(collectionRef, questionObj )
        alert('cadastrado com sucesso')
        const questionDoc = doc(db, 'suggestionsList', questionObj.id)
        deleteQuestion(questionObj.id)
    }
    

    useEffect(()=>{
        getDatas()
        console.log(suggestionsQuestions)
        setIsLoading(false)
    }, [])
     
      
  return (
    <div className='flex flex-col items-center p-2'>
        <Logo/>
        {isLoading ? <p>Carregando...</p> : 
        suggestionsQuestions.map((question:any, index: number) => {
            return <div key={index} >
                <h2>{question?.title}</h2>
                
                <h3>{question.category}</h3>
                <ul>
                   {question.alternatives.map((alternative:any)=>{
                    return <li>{alternative.text}</li>
                   })}
                </ul>
                <button onClick={()=> createQuestion(question)} className='bg-strong text-white px-8 py-1 rounded-lg shadow-sm'>ADICIONAR</button>
                <button onClick={()=> deleteQuestion(question.id)} className='bg-yellow text-white px-8 py-1 rounded-lg shadow-sm'>REMOVER</button>
            </div>
        })
        }

    </div>
  )
}
