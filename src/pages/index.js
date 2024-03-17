import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import homepic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>portfolio | Naveenkumar</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light' >
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={homepic} alt='' className='w-full h-auto' priority />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text={`Crafting Digital Experiences: From Concept to Code.`} className='!text-5xl !text-left' />
              <p className='my-4 text-base font-medium'>Welcome to my portfolio! I'm Naveenkumar Subramani, a passionate Full Stack Developer dedicated to transforming visions into reality through code and design. Explore my latest projects and articles where I demonstrate expertise in React.js and other cutting-edge web development technologies. Let's collaborate and bring your ideas to life!</p>
              <div className='flex items-start self-start mt-2'>
                <Link href='/FullStack-resume.pdf' target={'_blank'}
                  download={true}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-dark border-2 border-solid border-transparent hover:border-dark
                   dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'
                >Resume
                  <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link href='mailto:smartnaveen0504@gmail.com'
                  className='ml-4 mt-3 text-lg font-medium capitalize text-dark underline dark:text-light'>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
