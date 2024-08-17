import React, { useEffect } from "react";

const FilterByVendor = ({ vendors, handleCheckboxChange, selectedVendors }) => {

    return (
        <>
            <h3>Filtrar por Vendedor</h3>
            {vendors.map((vendor) => (
                <div key={vendor.id}>
                    <input
                        type="checkbox"
                        id={`vendor-${vendor.id}`}
                        value={vendor.id}
                        checked={selectedVendors.includes(vendor.id)}
                        onChange={() => handleCheckboxChange(vendor.id)}
                    />
                    <label htmlFor={`vendor-${vendor.id}`}>{vendor.email}</label>
                </div>
            ))}

        </>
    )
};

export default FilterByVendor;