
import React from 'react';
import { Card } from 'primereact/card';

export default function CardText() {
    return (
        <div className="card m-16">
            <Card >
                <h3 className='text-gray-500 text-sm font-bold'>
                    SNEAKER COMPANY
                </h3>
                <h1 className='text-4xl font-extrabold mt-4'>
                    Fall Limited Edition Sneakers
                </h1>
                <p className="text-gray-400 text-base mt-6">
                    These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber oute sole, they´ll withstand everything the weather can offer.
                </p>
                <div className='flex items-center mt-4'>
                    <p className='font-bold text-3xl'>
                        $125.00
                    </p>
                    <p className='flex items-center justify-center ml-2 h-7 w-12 rounded-xl bg-black text-white font-bold'>
                        50%
                    </p>
                </div>
                <p className='text-base mt-1 text-gray-400 line-through'>$250</p>
            </Card>
        </div>
    )
}
