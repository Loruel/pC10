import React, { useState } from "react";
import { Button } from 'primereact/button';

export default function ButtonAdd() {
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="cursor-pointer ml-3 card flex justify-center items-center rounded-lg flex-wrap justify-content-center gap-3 bg-[#ff7d1b] w-full h-14 font-bold active:bg-[#ffac6a] transition-colors duration-400">
            <Button label="Add to cart" icon="pi pi-shopping-cart" loading={loading} onClick={load} />
        </div>
    )
}
