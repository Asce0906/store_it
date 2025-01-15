import Image from 'next/image'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex min-h-screen'>
            <section className='bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5'>
                <div className='flex flex-col max-w-[430px] max-h-[800px] space-y-12 justify-center'>
                    <Image
                        src='/assets/icons/logo-full.svg'
                        alt='logo'
                        width={224}
                        height={82}
                        className='h-auto'
                    />
                    <div className='space-y-5 text-white'>
                        <h1 className='h1'>Manage your files the best way</h1>
                        <p className='body-1'>
                            This is a place where you can store all your files.
                        </p>
                    </div>

                    <Image
                        src='/assets/images/files.png'
                        alt='illustration'
                        width={342}
                        height={342}
                        className='transition-all hover:scale-105 hover:rotate-2'
                    />
                </div>
            </section>

            <section className='flex flex-1 flex-col bg-white p-4 py-10 items-center lg:justify-center lg:p-10 lg:py-0'>
                <div className='mb-16 lg:hidden'>
                    <Image
                        src='/assets/icons/logo-full-brand.svg'
                        alt='logo'
                        width={224}
                        height={82}
                        className='w-[200px] lg:w-[250px]  h-auto'
                    />
                </div>
                
                {children}
            </section>
        </div>
    )
}

export default Layout