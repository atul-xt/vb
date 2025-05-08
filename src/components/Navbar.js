import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <section>
            <Image className='w-full' src="/images/navbar.png" width={500} height={500} unoptimized alt='Navbar' />
        </section>
    )
}

export default Navbar