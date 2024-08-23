import React from 'react'
import Pictures from './pictures'
import Information from './information'

export default function Body() {

    return (

        <div className='grid grid-cols-2 min-h-screen'>

            <div className='w-full h-auto flex justify-center'>
                <Pictures />

            </div>

            <div className='w-full h-auto flex justify-center'>
                <Information />
            </div>

        </div>

    )
}
