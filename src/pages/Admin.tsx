import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, {useState, useEffect} from 'react'
import Logo from '../components/Logo'
import { db } from '../firebase/firebase-config'

export default function Admin() {
    const [suggestionsQuestions, setSuggestionsQuestions] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const suggestionsRef = collection(db, "suggestionsList")
    const [toRender, setToRender] = useState<number>(0)
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
        setToRender(curr => curr +1)
    
    }

    const createQuestion = async (questionObj:IQuestion)=>{
        const collectionRef = collection(db, questionObj.category )
        await addDoc(collectionRef, questionObj )
        alert('cadastrado com sucesso')        
        deleteQuestion(questionObj.id)
        setToRender(curr => curr +1)
    }
    

    useEffect(()=>{
        console.log('renderizou')
        getDatas()
        
        setIsLoading(false)
    }, [toRender])
     
      
  return (
    <div className='flex flex-col items-center p-2'>
        <Logo/>
        <h2 className='font-bold text-xl text-grayLight'>Pagina de ADMIN</h2>
        {isLoading ? <p>Carregando...</p> : 
        suggestionsQuestions.map((question:any, index: number) => {
            return <div className='shadow-xl p-4' key={index} >
                <h2 className='font-bold text-2xl mt-8 mb-2 text-center'>{question?.title}</h2>
                
                <h3 className='text-center font-semibold capitalize text-gray'>{question.category}</h3>
                <ul>
                   {question.alternatives.map((alternative:any, i:number)=>{
                    return <li  key={i} className={`${alternative.isTrue ? 'text-blue' : 'text-red'} font-semibold text-lg capitalize mb-2`}>{alternative.text}</li>
                   })}
                </ul>
                <div className='flex gap-4'>
                    <button onClick={()=> createQuestion(question)} className='bg-strong text-white px-8 py-1 rounded-lg shadow-sm'>ADICIONAR</button>
                    <button onClick={()=> deleteQuestion(question.id)} className='bg-yellow text-white px-8 py-1 rounded-lg shadow-sm'>REMOVER</button>
                </div>
            </div>
        })
        }

    </div>
  )
}
