
import React, { useState } from 'react';
import { Galleria } from 'primereact/galleria';
import imagen1 from '/public/image-product-1.jpg'
import imagen2 from '/public/image-product-2.jpg'
import imagen3 from '/public/image-product-3.jpg'
import imagen4 from '/public/image-product-4.jpg'
import imagenCh1 from '/public/image-product-1-thumbnail.jpg'
import imagenCh2 from '/public/image-product-2-thumbnail.jpg'
import imagenCh3 from '/public/image-product-3-thumbnail.jpg'
import imagenCh4 from '/public/image-product-4-thumbnail.jpg'
import ModalPicture from './ModalPicture'
import { useShop } from '../context/Context'

export default function BasicDemo() {

    const { toggleModal, isOpen } = useShop()

    const [images, setImages] = useState([
        { itemImageSrc: imagen1, thumbnailImageSrc: imagenCh1 },
        { itemImageSrc: imagen2, thumbnailImageSrc: imagenCh2 },
        { itemImageSrc: imagen3, thumbnailImageSrc: imagenCh3 },
        { itemImageSrc: imagen4, thumbnailImageSrc: imagenCh4 },
    ])

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img className='rounded-2xl w-full' src={item.itemImageSrc} alt={item.alt} onClick={toggleModal} />
    }

    const thumbnailTemplate = (item) => {
        return <img className='p-2 rounded-3xl mt-4' src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return (
        <div className=''>
            <div className="card m-10 ml-24 w-4/6">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                    item={itemTemplate} thumbnail={thumbnailTemplate} />


            </div>
            <div>
                {isOpen &&
                    <ModalPicture />}
            </div>
        </div>



    )
}
