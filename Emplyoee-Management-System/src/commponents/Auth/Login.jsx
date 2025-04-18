import React, { useState } from 'react';

export const Login = () => {

    const [email, setEmail] = useState(''); //empty string is email initially

    const [password, setPassword] = useState(''); //empty string is password initially

    const submitHandler = (e) => {
        // fetch login data from API
        // check if credentials are valid
        // if valid, set user state and navigate to dashboard
        // if invalid, display error message
        // implement form validation
        e.preventDefault();
        // console.log('Form submitted');
        alert('Form submitted');

        // Clear the form fields after submission
        setEmail('');  // Reset the email input
        setPassword('');  // Reset the password input
    }

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className='flex flex-col h-screen w-screen items-center justify-center bg-gray-900 font-quicksand'>
            <div className='text-4xl font-bold text-white underline'>Login</div>
            <div className='border-2 mt-4 border-emerald-600 p-6 rounded-lg bg-gray-800 shadow-lg'>
                <form
                    onSubmit={submitHandler}
                    autoComplete="off"
                    action="" className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            // console.log(e.target.value);
                            setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder='Enter your email'
                        className='border-2 outline-none bg-transparent border-emerald-600 w-full p-2 rounded-full text-white placeholder:text-gray-400'
                        autoComplete="off"
                        required
                    />
                    <div className='relative w-full mt-3'>
                        <input
                            value={password}
                            onChange={(e) => {
                                // console.log(e.target.value);
                                setPassword(e.target.value);
                            }}
                            type={showPassword ? "text" : "password"}
                            placeholder='Enter your password'
                            className='border-2 outline-none bg-transparent border-emerald-600 w-full p-2 rounded-full text-white placeholder:text-gray-400 pr-10'
                            autoComplete="new-password"
                            minLength={4}
                            maxLength={20}
                            required
                            name="user_password"  // Unique name attribute
                        />
                        <span
                            className='absolute right-3 top-2.5 text-gray-400 cursor-pointer'
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </span>
                    </div>
                    <button
                        type="submit"
                        className='mt-3 mb-2 border-none w-full p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-300'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

// Web App Structure
// login -> admin -> create
//                -> track
//       -> employee -> new
//                   -> accept
//                   -> failed
//                   -> completed
