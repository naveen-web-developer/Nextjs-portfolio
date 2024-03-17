import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import profilepic from '../../public/images/profile/naveen.JPG'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null)

  const motionvalue = useMotionValue(0)
  const springValue = useSpring(motionvalue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionvalue.set(value)

    }

  }, [value, isInView, motionvalue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      // console.log(latest);
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])




  return <span ref={ref}></span>

}

const about = () => {
  return (
    // <div>about</div>
    <>
      <Head>
        <title>Naveenkumar | About Page</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect/>
      <main className='flex flex-col w-full items-center justify-center dark:text-light'>
        <Layout className='pt-15'>

          <AnimatedText text='Fueled by Passion, Driven by Purpose' className='mb-16 text-5xl' />
          <div className='grid w-full grid-cols-8 gap-16 '>
            <div className='col-span-3 flex flex-col items-center justify-center'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>
              With a fervent dedication to web development, I am Naveenkumar Subramani, a seasoned Full Stack Developer based in Bengaluru, KA. 
              Over the course of my career, I've honed my skills in frontend technologies such as React and Angular, alongside backend proficiency in Node.js and Express.js. 
              
              </p>
              <p className='my-4 font-medium'>
              Leveraging frameworks like React Native and Next.js, I've delved into mobile app development and REST API creation, ensuring seamless user experiences across platforms. 
              I thrive in collaborative environments, where I contribute expertise in Git, Postman, and Jira to drive project success. 
              Let's connect and embark on transformative web development journeys together.
              </p>
              <p className='font-medium'>
                Whether I'm working on a website, mobile app, or
                other digital product, I bring my commitment to design excellence and user-centered thinking to
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>

            </div>
            <div className='col-span-3 h-max relative rounded-2xl border-2 border-solid  border-dark bg-light  p-8 dark:bg-dark dark:border-light'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilepic} alt='navi' className='w-full h-auto rounded-2xl' priority />
            </div>
            <div className='flex flex-col col-span-2 items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'><AnimatedNumber value={5} />+</span>
                <h2 className='font-medium capitalize text-xl text-dark/75 dark:text-light/75'>clients</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'><AnimatedNumber value={5} />+</span>
                <h2 className='font-medium capitalize text-xl text-dark/75 dark:text-light/75'>projects</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'><AnimatedNumber value={2} />+</span>
                <h2 className='font-medium capitalize text-xl text-dark/75 dark:text-light/75'>experience</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  )
}

export default about