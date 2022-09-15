import React, { useEffect, useState } from 'react'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button.style'
import Logo from '../components/Logo'
import SuggestionModal from './SuggestionModal'
import './Suggestion.css'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase-config'


export default function Suggestion() {

  interface TAlternative {
    text:string,
    isTrue: boolean
  }

  const inputsGroup = [
    {
    name: 'questionTitle',
    label: 'Pergunta',
    placeholder: 'Digite qual é a sua pergunta',
    isAlternative: false,    
    isThisAlternativeTrue: false
  },
    {
    name: 'trueAnswer',
    label: 'Alternative correta',
    placeholder: 'Digite a resposta para a sua pergunta',
    isAlternative: true,   
    isThisAlternativeTrue: true
     
  },
    {
    name: 'falseAnswer1',
    label: 'Alternativa falsa',
    placeholder: 'Digite uma alternativa falsa para a sua pergunta',
    isAlternative: true,    
    isThisAlternativeTrue: false
   
  },
    {
    name: 'falseAnswer2',
    label: 'Alternativa falsa',
    placeholder: 'Digite uma alternativa falsa para a sua pergunta',
    isAlternative: true,    
    isThisAlternativeTrue: false
   
  },
    {
    name: 'falseAnswer3',
    label: 'Alternativa falsa',
    placeholder: 'Digite uma alternativa falsa para a sua pergunta',
    isAlternative: true,    
    isThisAlternativeTrue: false
   
  },
]

  interface IValues {
    category: '',
    questionTitle: string,
    trueAnswer: string ,
    falseAnswer1: string
    falseAnswer2: string,
    falseAnswer3: string
  }
  const [values, setValues] = useState<IValues>({
    category: '',
    questionTitle: '',
    trueAnswer: '',
    falseAnswer1: '',
    falseAnswer2: '',
    falseAnswer3: '',
  })


  const [showModal, setShowModal] = useState<boolean>(false)

  
  const createQuestion = ()=>{    
    const collectionRef = collection(db, 'suggestionsList')
    const restructuredQuestion = {
      category: values.category,
      title : values.questionTitle,
      alternatives : [
        {text: values.falseAnswer1, isTrue: false},
        {text: values.falseAnswer2, isTrue: false},
        {text: values.falseAnswer3, isTrue: false},
        {text: values.trueAnswer, isTrue: true},
      ]
    }
    addDoc(collectionRef, restructuredQuestion ).then(res => setShowModal(current => !current)) .catch(err => console.log(err))
    

  }
 
  const handleSubmit = (e: any) :void=>{   
    e.preventDefault()    
    createQuestion()
    

  }

  const categories = [
    {name : 'historia'},
    {name: 'geografia'},
    {name: 'biologia'},
    {name: 'programacao'}
  ]


  return (
    <div className='text-center p-2 flex flex-col gap-2'>
      <Logo/>
      <h2 className='font-bold  text-2xl'>Sugestão de pergunta</h2>
      <p className='font-semibold text-grayLight text-sm '>Contribua para o nosso banco de questões e torne nosso jogo mais dinâmico.</p>
      
    <form onSubmit={()=> console.log('first')}>
      <div className='flex items-center justify-center gap-3 my-4'>
        {
          categories.map((categorie, index) =>{
            return(
              <div className='flex flex-col' key={index}>
                <label className='font-semibold capitalize'>{categorie.name}</label>
                <input type="radio" name='category' required value={categorie.name} onClick={(ev : any)=> setValues({...values, category: ev.target.value})} />
              </div>
            )
          })
        }
      </div>
      <div className='px-4  my-2'>
        <h3 className='text-start text-xl font-bold mb-4'>Informações sobre pergunta</h3>

        {inputsGroup.map((input, index) => {
          
          return(
              <>
              <div key={index} className='flex flex-col mb-2'>
                <label className='font-semibold text-start'>{input.label}</label>
                <input 
                className='border border-grayLight px-2 py-1 rounded-sm placeholder:text-xs'
                placeholder={input.placeholder}
                name = {input.name}
                required                
                onChange= {(e: React.ChangeEvent<HTMLInputElement>) => setValues({...values, [e.target.name]: e.target.value}) }
                
                />
              </div>
              {input.name == 'trueAnswer' && <hr className='mb-4 text-grayLight'/>}
              </>
              )
    })}
        
        
      </div> 
<div className='flex gap-2 flex-col'>
  
       
         <Button primary onClick={handleSubmit}>
          enviar pergunta
        </Button> 


  
        <Link to='/'>  
          <Button secundary>
            voltar ao menu
          </Button>
        </Link>
    </div>
{
  showModal && <SuggestionModal setShowModal={setShowModal}/>
}

</form>
        
    </div>
  )
}
