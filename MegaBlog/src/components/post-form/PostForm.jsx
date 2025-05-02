import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Logo, RTE } from "../index"
import appwriteService from "../../appwrite/config" // because it is exported as default from config.js
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostForm = ({ post }) => {

  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  })

  const navigate = useNavigate()

  const userData = useSelector((state) => {
    return state.auth.userData
  })

  // if the user submitted the form, we will create a new post in the database
  // if post exists then we will update the post in the database if not we will create a new post in the database

  const onSubmit = async (data) => {
    try {
      if (post) {
        // If post exists, upload the new image to the database
        const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

        // Update the post image to the new image
        if (file) {
          // Delete the old image from the database
          await appwriteService.Delete_file(post.featuredImage);
        }

        const updatedPost = await appwriteService.updatePost(
          post.$id,
          {
            ...data,
            featuredImage: file ? file.$id : undefined, // If file exists, use the new image ID; otherwise, use the old image ID
          }//The comma is used to separate key-value pairs in an object literal
        );

        if (updatedPost) {
          navigate(`/post/${updatedPost.$id}`);
        }
      } else {
        // If post does not exist, create a new post

        const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

        if (file) {
          const fileId = file.$id;
          data.featuredImage = fileId;

          const dbPost = await appwriteService.createPost({
            ...data,
            userId: userData.$id,
          })

          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }

        }

      }
    } catch (error) {
      // console.log(error);
      console.error("Error submitting the form:", error);
    }
  };

  // title- watch , slug- generate value
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")// global match and replace all spaces with -
        .replace(/\s/g, "-");// nagate the space and replace with -, '-' means range, \d menas digits, \s means spaces
    }

    return "";

  }, [])

  React.useEffect(() => {
    //      variable             object
    const subscription = watch((value, { name, }) => {// watch we got from useForm, it is a function that takes a callback function as an argument and returns a subscription object. from react-hook-form
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }

    })

    return () => {
      subscription.unsubscribe(); // memory leak prevention(management)(optimization)
    }

  }, [slugTransform, watch, setValue])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && post.featuredImage && (// If post.featuredImage is undefined or invalid, the src attribute for the <img> tag will break.
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title || "Featured Image"}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm