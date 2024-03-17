import Link from 'next/link'
import React,{useEffect,useState} from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[2px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath == href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
    </Link>
  )

}

const NavBar = () => {
  const [mode,setMode] = useThemeSwitcher()

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }
  
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light' >
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen?'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen?'opacity-0':'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen?'-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
      </button>
      {/* <div className='absolute left-[5%] top-2 translate-x-[50%]' >
        <Logo />
      </div> */}
      <nav className='mx-20'>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/project' title='Project' className='mx-4' />
        {/* <CustomLink href='/article' title='Article' className='ml-4' /> */}
      </nav>
      <nav className='flex items-center justify-center flex-wrap'>
        {/* <motion.a href='https://twitter.com' target={'_blank'}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
        ><TwitterIcon /></motion.a> */}
        {/* <motion.a href='https://twitter.com' target={'_blank'}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
        ><GithubIcon /></motion.a> */}
        <motion.a href='https://www.linkedin.com/in/naveenkumarsubramani/' target={'_blank'}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
        ><LinkedInIcon /></motion.a>
        {/* <motion.a href='https://twitter.com' target={'_blank'}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 ml-3'
        ><PinterestIcon /></motion.a> */}
        <button  
        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode==='light' ? 'bg-dark text-light' :'bg-light text-dark'}`}
        onClick={()=>setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))}
        >
          {mode==='dark'? <SunIcon className={'fill-dark'}/>:<MoonIcon className={'fill-dark'}/>}
        </button>
      </nav>

    </header>
  )
}

export default NavBar