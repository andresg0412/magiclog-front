import React, { useState } from "react";
import './FilterComponent.module.css';


const FilterComponent = ({ minPrice, maxPrice, minFilterChange, maxFilterChange }) => {
    const [minValue, setMinValue] = useState(minPrice);
    const [maxValue, setMaxValue] = useState(maxPrice); // Valor inicial del rango
    const [filterMin, setFilterMin] = useState('');
    const [filterMax, setFilterMax] = useState('');
    const handleMinChange = (e) => {
        setFilterMin(Number(e.target.value));
        if (filterMin <= maxValue) {
            setMinValue(filterMin);
            minFilterChange(filterMin);
        }
    };


    const handleMaxChange = (e) => {
        setFilterMax(Number(e.target.value));
        if ( filterMax >= minValue) {
            setMaxValue(filterMax);
            maxFilterChange(filterMax);
        }
    };
    return (
        <>
            <label className="">
                Minimo: {minValue}

                <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={minValue}
                    onChange={handleMinChange}
                />
            </label>
            <label className="">
                Máximo: {maxValue}

                <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={maxValue}
                    onChange={handleMaxChange}
                />
            </label>

        </>
    );
};

export default FilterComponent;