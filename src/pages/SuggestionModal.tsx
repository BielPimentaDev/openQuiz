import React, { SetStateAction } from 'react'
import { Button } from '../components/Button.style'
import {AiFillCheckCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './SuggestionModal.css'

interface Props{
    setShowModal: React.Dispatch<SetStateAction<boolean>>

}

export default function SuggestionModal({setShowModal}: Props) {
  return (
    <div className=' bg-[rgba(217,217,217,0.6)] h-screen w-screen  top-0 left-0 fixed flex items-center justify-center'>
        <div className='suggestionModal bg-white w-[95%] h-[90%] rounded-lg shadow-lg py-8 px-4 text-center' >
        <AiFillCheckCircle color='#63FFD1' size={50} className='mx-auto '/>
       
        <h2 className='font-bold text-2xl'>Obrigado por contribuir</h2>
        <p className='text-grayLight text-sm my-2'>Iremos avaliar sua pergunta e em breve ela estara em nossos bancos!</p>
        <img src="/public/thanks.png"/>
        <div className='flex flex-col gap-4'>
            <Link to="/suggestion" ><Button onClick={() => setShowModal(false)} primary>Enviar outra pergunta</Button></Link>
            <Link to="/"><Button secundary>Voltar ao menu </Button></Link>
        </div>
        </div>
    </div>
  )
}
