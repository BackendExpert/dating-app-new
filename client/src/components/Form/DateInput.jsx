// DateInput.jsx
import React from 'react';

const DateInput = ({ label, name, value, onChange, placeholder, required = false }) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-pink-700 mb-2">
                    {label}
                </label>
            )}
            <input
                type="date"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-2xl border border-pink-200 bg-white/60 text-gray-900 
                           focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-400/70 
                           shadow-sm placeholder-gray-400 transition duration-200"
            />
        </div>
    );
};

export default DateInput;
