import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function Contador() {

    const [value2, setValue2] = useState(0);

    return (
        <div className="card flex flex-wrap p-fluid">

            <div className="flex-auto">
                <label htmlFor="horizontal-buttons" className="font-bold block mb-2"></label>
                <InputNumber inputId="horizontal-buttons" value={value2} onValueChange={(e) => setValue2(e.value)} showButtons buttonLayout="horizontal"
                    step={1}
                    mode="decimal"
                    min={0}
                    className="bg-gray-400/20 rounded-lg"

                    decrementButtonClassName="p-button-danger w-10 h-14 text-[#ff7d1b] font-bold rounded-l-2xl"
                    incrementButtonClassName="p-button-success w-10 h-14 text-[#ff7d1b] font-bold rounded-r-2xl"
                    inputClassName="bg-transparent text-center outline-none"
                    
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus "
                />
            </div>
        </div>
    )
}
