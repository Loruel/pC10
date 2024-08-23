
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
import { useShop } from '../context/Context';

export default function ItemThumbnailsDemo() {

  const { toggleModal } = useShop()

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
    return <img src={item.itemImageSrc} alt={item.alt} className='block w-full rounded-2xl p-2 mb-4' />;
  }

  const thumbnailTemplate = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} className='block p-1 rounded-xl' />;
  }

  return (
    <div className='flex fixed z-50 items-center justify-center w-full h-full top-0 bg-black/50'>
      <div className='absolute top-14 right-1/4'>
        <span className='w-10 h-10 text-[#ff7d1b] font-extrabold text-2xl cursor-pointer' onClick={toggleModal}>
          X
        </span>
      </div>
      <div className="card w-96">
        <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
          showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate}
          pt={options}

          showThumbnailNavigators={false} />
          
      </div>
    </div>

  )
}

const options = {
  /* itemWrapper: { className: 'bg-transparent' },
  itemContainer: { className: 'bg-transparent' },
  thumbnailItemsContainer: { className: 'bg-transparent' },
  thumbnailContainer: { className: 'bg-transparent' } */
}
