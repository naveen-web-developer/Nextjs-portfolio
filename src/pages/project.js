import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import eassycart from '../../public/images/projects/eassycart.png'
import ownership from '../../public/images/projects/ownership.png'
import eurecab from '../../public/images/projects/eurecab.png'
import haiku from '../../public/images/projects/haiku.png'
import abby from '../../public/images/projects/abby.png'
import insign from '../../public/images/projects/insign.png'
import TransitionEffect from '@/components/TransitionEffect'


const FeatureProject = ({ type, title, summary, img, link,  }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light' />
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>
                    {summary}
                </p>
                <div className='mt-2 flex items-center'>
                    {/* <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link> */}

                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'>
                        Visit Project
                    </Link>

                </div>
            </div>
        </article>
    )
}

const Projects = ({ type, title, img, link, }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                {/* <p className='my-2 font-medium text-dark'>
                {summary}
                </p> */}
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='text-lg font-semibold underline'>
                        Visit
                    </Link>
                    {/* <Link href={github} target='_blank' className='w-8'>
                        <GithubIcon />
                    </Link> */}



                </div>
            </div>
        </article>
    )
}

const project = () => {
    return (
        // <div>project</div>
        <>
            <Head>
                <title>Naveenkumar | Project Page</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect/>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text={'Projects: Where Lines of Code Unravel Stories of Innovation'} className='mb-16 text-4xl' />

                    <div className='grid grid-cols-12 gap-24'>
                        <div className='col-span-12'>
                            {/* Feature project */}
                            <FeatureProject
                                title={'Ownership NFT Authenticator'}
                                summary={`Developed a full-stack web application using Nestjs with typescript serving a REST API with React as the
                                frontend.
                                Developed a mobile app using React Native for user and business partner ownership.
                                Developed NFT authenticator provides the safest way for every user to prove their NFT Ownership without the
                                risk of being hacked.`}
                                link={'https://ownership.fyi/'}
                                type={'Featured Project'}
                                img={ownership}
                                // github={'/'}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Projects
                                title={'Insign the one platform'}
                                link={'https://insign.skills201.com'}
                                type={'Featured Project'}
                                img={insign}
                                // github={'/'} 
                                />
                        </div>
                        <div className='col-span-6'>
                            <Projects
                                title={'Haiku Web Application'}
                                link={'https://alfred.haikumedia.fr/login'}
                                type={'Featured Project'}
                                img={haiku}
                                // github={'/'}
                                 />
                        </div>


                        <div className='col-span-12'>
                            <FeatureProject
                                title={'French Cab Service app'}
                                summary={`Developed a French-based cab service platform that comprises two apps: one for customers(Eurecab-Votre VTC
                                    Responsable) and another for drivers(Eurecab Chauffeur Priv ́e VTC).
                                    Successfully achieved over 50,000 downloads, reflecting the app’s popularity and widespread user adoption.
                                    Maintained a stellar 4-star rating, underscoring the positive reception and satisfaction of users.`}
                                link={'https://play.google.com/store/apps/details?id=com.eurecab&hl=en&gl=US'}
                                type={'Featured Project'}
                                img={eurecab}
                                // github={'/'}
                            />
                        </div>
                        <div className='col-span-6'><Projects
                            title={'Abby Services'}
                            link={'https://abby.services/home'}
                            type={'Featured Project'}
                            img={abby}
                            // github={'/'} 
                            /></div>
                        <div className='col-span-6'>
                            <Projects
                                title={'E-commerce Application'}
                                link={'/'}
                                type={'Featured Project'}
                                img={eassycart}
                                // github={'/'} 
                                />
                        </div>
                    </div>
                </Layout>

            </main>
        </>

    )
}

export default project