// DefaultInput.jsx
import React from 'react';

const DefaultInput = ({
    label,
    type = 'text',
    name,
    value,
    onChange,
    placeholder,
    required = false,
}) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-pink-700 mb-2">
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-2xl border border-pink-200 bg-white/60 text-gray-900 
                           placeholder-gray-400 shadow-sm focus:outline-none focus:border-pink-500 
                           focus:ring-2 focus:ring-pink-400/70 transition duration-200"
            />
        </div>
    );
};

export default DefaultInput;
