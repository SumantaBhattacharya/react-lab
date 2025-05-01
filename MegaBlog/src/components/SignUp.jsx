import React, { useState } from 'react'
import authService from "../appwrite/auth"
import { Link, useNavigate } from "react-router-dom"
import { login } from '../features/auth/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
const SignUp = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [error, setError] = useState(null)

  const { register, handleSubmit } = useForm()

  const signUpHandler = async (data) => {
    setError("")// could have been set to null as well instead of empty string

    try {
      const Usersession = await authService.createAccount(data);

      if (Usersession) {
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(login(userData))// update the user data in the store
          navigate("/")// redirect to home page
        }

      } else {
        setError("User not found")
      }

    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <Link
            to="/"
          >
            <span className="inline-block w-full max-w-[100px]">
              <Logo width="100%" />
            </span>
          </Link>

        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form
          action=""
          onSubmit={handleSubmit(signUpHandler)}
        >
          <div className='space-y-5'>

            <Input
              type="text"
              placeholder="Enter your name"
              label="Name: "
              {...register("name", { required: true })}
            />

            <Input
              type="email"
              placeholder="Enter your email"
              label="Email: "
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })}
            />

            <Input
              type="password"
              placeholder="Enter your password"
              label="Password: "
              {
              ...register("password", {
                required: true,
                validate: {
                  matchPatern: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) ||
                    "Password must be at least 8 characters long and contain at least one letter and one number",
                }
              })
              }
            />

            <Button type="submit"
              className="w-full">
              Create Account
            </Button>

          </div>
        </form>

      </div>

    </div >
  )
}

export default SignUp
