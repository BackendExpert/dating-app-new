// Dropdown.jsx
import React from 'react';

const Dropdown = ({ label, name, onChange, required = false, options = [] }) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-pink-700 mb-2">
                    {label}
                </label>
            )}
            <select
                id={name}
                name={name}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 rounded-2xl border border-pink-200 bg-white/60 text-gray-900 
                           shadow-sm focus:outline-none focus:border-pink-500 focus:ring-2 
                           focus:ring-pink-400/70 transition duration-200"
            >
                <option value="" className="text-gray-500">Select an option</option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
