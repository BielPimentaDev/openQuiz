import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button.style'
import Logo from '../components/Logo'
import { ProgressBar } from '../components/ProgressBar.style'
import { AppContext } from '../context/AppContext'


export  function Congratulations() {
   const {userPoints, setUserPoints} = useContext(AppContext)
   const {category} = useContext(AppContext)
   const {questionsLength} = useContext(AppContext)
   const pointsPercentual:number = (userPoints/ questionsLength *100)
  


  return (
    <div className='text-center flex flex-col items-center justify-center gap-4'>
      <Logo/>
      <h2 className='font-bold text-3xl  '>Parabéns!</h2>
      <p className='text-gray font-semibold'>Categoria: {category}</p>
      <img src='/congratulations.png' className='w-[300px] mx-auto'/>
      <p className='font-semibold'>
        Você respondeu <br/>
        <span className='text-3xl'>{userPoints}/{questionsLength + 1}</span> <br/>
        respostas certas!
      </p>

      <div className='bg-[#F1F1F1] w-3/5 h-3 rounded-lg mx-auto lg:my-8 '>

        <ProgressBar percentual={pointsPercentual}/>

      <div className='flex flex-col gap-4 mt-4 items-center lg:my-8'>

          <Link to='/main'>
            <Button primary={true} onClick={()=> setUserPoints(0)}>
                Jogar novamente
            </Button>
          </Link>

          <Link to='/categories'>
            <Button secundary={true}  onClick={()=> setUserPoints(0)}>
                categorias
            </Button>
          </Link>
          </div>
      </div>
    </div>
  )
}
