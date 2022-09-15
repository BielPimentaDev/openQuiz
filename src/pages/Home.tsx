import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button.style'



export  function Home() {
  return (
      <div className='text-center flex flex-col items-center justify-between  h-screen'>
        <div>
          <h1 className='font-bold text-2xl my-4'>Bem-vindo ao open quiz</h1>
          <p className='font-semibold text-gray text-lg '>O que você deseja ?</p>
        </div>
       <img src='/question.png'  className=''/>
      
      <div className='flex flex-col gap-4'>

      <Link to='/categories'>
        <Button primary={true}>
            iniciar jogo
        </Button>
      </Link>

      <Link to='/suggestion'>
        <Button secundary={true}>
            sugerir pergunta
        </Button>
      </Link>
      </div>

      <footer className='text-grayLight mb-4'>
      © Criado por Gabriel Pimenta 
      </footer>
      </div>
 
  
  )
}
