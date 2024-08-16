import React, { useState } from "react";


const FilterComponent = () => {
    const [value, setValue] = useState(50); // Valor inicial del rango
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <>
            <label htmlFor="rangeInput" className="block text-lg font-medium text-gray-700">
                Valor: {value}
            </label>
            <input
                type="range"
                id="rangeInput"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                className="mt-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />

        </>
    );
};

export default FilterComponent;