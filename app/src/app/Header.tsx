import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className='sticky top-0 z-50 bg-yellow-50'>
        <div>
            <div className='flex flex-col items-center space-y-5'>
                <p className='text-blue-400'>Welcome To Meta Messenger</p>
                <Link href='auth/signin' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign In</Link>
            </div>

        </div>
    </header>
  )
}

export default Header
