import React from 'react'
import Panchang from './Panchang'
import ActionLinks from './ActionLinks'

const PanchangSection = () => {
    return (
        <section className='bg-red-50'>
            <main className='max-w-7xl mx-auto py-10'>
                <div className="text-center">
                    <h1 className="text-red-900 text-3xl font-semibold"> Today’s Panchang</h1>
                    <p className="mt-1 max-w-xl mx-auto ">Start your day with clarity by checking today’s Panchang. Get accurate details on tithi, nakshatra, yoga, karan, and shubh muhurat</p>
                </div>
                <div className='mt-6 grid grid-cols-5 gap-5'>
                    <div className='col-span-3'>
                        <Panchang />
                    </div>
                    <div className='col-span-2'>
                        <ActionLinks />
                    </div>
                </div>
            </main>
        </section>
    )
}

export default PanchangSection