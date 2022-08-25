import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { AppContext } from '../context/AppContext'
import {BiCodeAlt} from 'react-icons/bi'
import {GiWorld} from 'react-icons/gi'
import {BsBook} from 'react-icons/bs'
import {MdBiotech} from 'react-icons/md'

export  function Categories() {[]
  const categoryList:{name:string, description:string, icon: any}[] = [
    {
    name: 'geografia',
    description: 'Lorem ipsum dolor acmet',
    icon: <GiWorld size={32}/>
  },
    {
    name: 'biologia',
    description: 'Lorem ipsum dolor acmet',
    icon: <MdBiotech size={32}/>
  },
    {
    name: 'historia',
    description: 'Lorem ipsum dolor acmet',
    icon: <BsBook size={32}/>
  },
    {
    name: 'programacao',
    description: 'Lorem ipsum dolor acmet',
    icon: <BiCodeAlt size={32}/>
  },
]

  let navigate = useNavigate()
  const {setCategory} = useContext(AppContext)
  const handlerClick = (category: any)=>{
    setCategory(category)
    navigate('/main')

  }
  return (
    <div className='text-center p-2 px-3'>
      <Logo/>
      <img src='/public/universe.png' className='absolute z-[-1] right-16 bottom-0 w-[350px]'/>
      <h2 className='font-bold text-lg my-4'>Selecione uma de nossas categorias de perguntas:</h2>

      <div className='grid grid-cols-3 gap-4 my-8'>
        
      {categoryList.map(category=>{
        return <button
        className='bg-yellow shadow-lg text-white h-[120px] w-[110px] rounded-t-xl flex flex-col items-center p-2'
        key={category.name} 
        onClick={()=> handlerClick(category.name)}>

        <i>{category.icon}</i>
        <span className='capitalize text-sm font-semibold'>{category.name}</span>
        <p className='text-xs font-light'>{category.description}</p>
        </button>
      })}
      
      </div>

      
    </div>
  )
}
