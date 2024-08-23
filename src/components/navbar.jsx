import { MegaMenu } from 'primereact/megamenu'
import React from 'react'
import { Ripple } from 'primereact/ripple';

export default function TemplateDemo() {

    const itemRenderer = (item, options) => {
        if (item.root) {
            return (
                <a className="w-full h-10 hover:border-b-2 hover:font-semibold border-[#ff7d1b] flex justify-center items-center cursor-pointer px-3 py-3 overflow-hidden relative font-normal text-base p-ripple hover:surface-ground" style={{}} onClick={(e) => options.onClick(e)}>
                    <span className={item.icon} />
                    <span className="m-2">{item.label}</span>
                    <Ripple />
                </a>
            );
        } else if (!item.image) {
            return (
                <a className="flex align-items-center p-3 cursor-pointer mb-2 gap-2 " onClick={options.onClick}>
                    <span className="inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem">
                        <i className={`${item.icon} text-lg`}></i>
                    </span>
                    <span className="inline-flex flex-column gap-1">
                        <span className="font-medium text-lg text-900">{item.label}</span>
                        <span className="white-space-nowrap">{item.subtext}</span>
                    </span>
                </a>
            );
        } else {
            return (
                <div className="flex flex-column align-items-start gap-3" onClick={options.onClick}>
                    <img alt="megamenu-demo" src={item.image} className="w-full" />
                    <span>{item.subtext}</span>
                    <Button className="p-button p-component p-button-outlined" label={item.label} />
                </div>
            );
        }
    };

    const items = [
        {
            label: 'Collections',
            root: true,
            template: itemRenderer

        },
        {
            label: 'Men',
            root: true,
            template: itemRenderer

        },
        {
            label: 'Women',
            root: true,
            template: itemRenderer

        },
        {
            label: 'About',
            root: true,
            template: itemRenderer

        },
        {
            label: 'Contact',
            root: true,
            template: itemRenderer

        },
    ]

    const start = <img className='mr-10 ml-10' src="logo.svg" alt="" />



    const end = <div className='flex items-center'>
        
        <i className='pi pi-shopping-cart w-12 cursor-pointer' />
        <img className='w-14 h-14 rounded-full mr-10 cursor-pointer border-2 hover:border-[#ff7d1b]' src="image-avatar.png" alt="" />
    </div>


    return (
        <div className="card mt-5">
            <div>
                <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />
                <div className='flex items-center justify-center'>
                    <div className="border-t border-pink-300- mt-4 w-11/12"></div>
                </div>
            </div>

        </div>

    )
}
