import React from 'react';

const DefaultButton = ({
    label = "Click the Button",
    onClick,
    type = "button",
    disabled = false
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`mt-6 w-full py-3 px-6 rounded-full font-semibold text-white text-lg shadow-md transition duration-300
                ${disabled
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-pink-600 hover:bg-pink-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2'}
            `}
        >
            {label}
        </button>
    );
};

export default DefaultButton;
