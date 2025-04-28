import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label &&
                <label
                    className='inline-block mb-1 pl-1'
                    htmlFor={id}>
                    {label}
                </label>
            }
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}// as a prop state access will be taken from here
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input

// https://react.dev/reference/react/forwardRef#render-function
// https://react.dev/reference/react/useId
// https://react.dev/reference/react/useId#usage