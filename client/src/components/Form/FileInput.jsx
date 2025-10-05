import React from 'react';

const FileInput = ({ label, name, onChange, required = false, accept, multiple = false }) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-pink-700 mb-2">
                    {label}
                </label>
            )}
            <input
                type="file"
                name={name}
                id={name}
                onChange={onChange}
                required={required}
                accept={accept}
                multiple={multiple}
                className="block w-full text-sm text-gray-900 border border-pink-300 rounded-2xl bg-white/60 
                           file:px-4 file:py-2 file:mr-4 file:border-0 
                           file:bg-pink-600 file:text-white file:font-medium file:rounded-full
                           hover:file:bg-pink-700 focus:outline-none focus:border-pink-500 
                           focus:ring-2 focus:ring-pink-400/70 shadow-sm transition duration-200"
            />
        </div>
    );
};

export default FileInput;
