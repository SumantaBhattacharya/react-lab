import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Logo, RTE } from "../index"
import appwriteService from "../../appwrite/config" // because it is exported as default from config.js
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostForm = ({post}) => {

  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  })

  const navigate = useNavigate()

  const userData = useSelector((state)=>{
    return state.auth.userData
  })

  return (
    <div>PostForm</div>
  )
}

export default PostForm