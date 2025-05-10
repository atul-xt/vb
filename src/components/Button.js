import React from 'react'

const Button = ({ name, svg, style }) => {
    return style ? (
        <button className={`${style} hover:scale-95 duration-200 transition ease-linear active:scale-105 cursor-pointer flex justify-center gap-1 shadow-lg px-3 py-2 rounded-md text-sm border border-gray-300 font-medium`}>
            {svg}{name}
        </button>
    ) : (
        <button className="bg-white hover:scale-95 duration-200 transition ease-linear active:scale-105 hover:bg-orange-600 hover:text-white cursor-pointer text-red-900 flex gap-1 border border-red-800 shadow-lg px-3 py-2 rounded-md text-sm font-medium">
            {svg}{name}
        </button>
    )
}

export default Button