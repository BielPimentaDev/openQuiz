import React, { useEffect, useState } from 'react'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button.style'
import Logo from '../components/Logo'
import SuggestionModal from './SuggestionModal'

export default function Suggestion() {
  const [questionTitle, setQuestionTitle] = useState<string>('')
  const [trueAlternative, settrueAlternative] = useState<string>('')
  const [falseAlternativeOne, setFalseAlternativeOne] = useState<string>('')
  const [falseAlternativeTwo, setFalseAlternativeTwo] = useState<string>('')
  const [falseAlternativeTree, setFalseAlternativeTree] = useState<string>('')

  const [showModal, setShowModal] = useState<boolean>(false)
 

  return (
    <div className='text-center p-2 flex flex-col gap-2'>
      <Logo/>
      <h2 className='font-bold  text-2xl'>Sugestão de pergunta</h2>
      <p className='font-semibold text-grayLight text-sm '>Contribua para o nosso banco de questões e torne nosso jogo mais dinâmico.</p>
      
      <div className='px-4 font-bold   my-2'>
        <h3 className='text-start text-xl'>Informações sobre pergunta</h3>

        <div className='flex flex-col text-start'>
          <label className='font-bold my-4 '> Pergunta </label> 
          <input className='border border-grayLight p-1 placeholder:text-sm placeholder:pl-1' type="text" placeholder='Ex: Qual a capital do Brasil?' onChange={ev => setQuestionTitle(ev.target.value)}/>
        </div>
      </div>
<div className='flex gap-2 flex-col'>
  
        <Button primary onClick={() => setShowModal(current => !current)}>
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
    </div>
  )
}
