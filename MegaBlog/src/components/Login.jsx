import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from "../features/auth/authSlice"
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [register, handleSubmit] = useForm();

    const [isError, setError] = useState(null)

    const loginHandler = async (data) => {

        setError("")// could have been set to null as well instead of empty string

        try {
            const session = await authService.login(data)//data.email, data.password

            if (session) {
                const userDate = await authService.getCurrentUser()

                if (userDate) {
                    dispatch(authLogin(userDate))// update the user data in the store
                    navigate("/")// redirect to home page
                } else {
                    setError("User not found")
                }

            }

        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div
            className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {isError && <p className="text-red-600 mt-8 text-center">{isError}</p>}

                <form
                    // event
                    onSubmit={handleSubmit(loginHandler)}
                    className='mt-8'
                >
                    <div className='space-y-5'>

                        // component Input
                        <Input
                            label="Email: "
                            placeholder="Enter your email"//...props
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />

                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {//           key
                            ...register("password", {
                                required: true,//objects
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long"
                                }
                            })
                            }
                        />

                        <Button
                            type="submit"
                            className="w-full"
                        >Sign in</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login
