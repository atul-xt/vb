import React from 'react'
import MoonSignForm from './MoonSignForm'
import FreeKundliForm from './FreeKundliForm'
import MaleHoroscopeForm from './MaleHoroscopeForm'

const VedicProfileForms = () => {
    return (
        <section className='py-10 max-w-7xl mx-auto'>
            <div className="text-center">
                <h1 className="text-red-900 text-3xl font-semibold">Explore Your Vedic Profile – Instantly & Free</h1>
                <p className="mt-1 max-w-2xl mx-auto ">Unlock the secrets of your stars with our free astrology tools! Generate your Kundli, check Horoscope Compatibility, and Discover Your Moon Sign.</p>
            </div>
            <div className='mt-10 flex'>
                <MoonSignForm />
                <FreeKundliForm />
                <MaleHoroscopeForm />
            </div>
        </section>
    )
}

export default VedicProfileForms