"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const AddTopic = () => {
 const [title, setTitle] = useState("")
 const [description, setDescription] = useState("")

 const router = useRouter()

 const handleSubmit = async (e: any) => {
  e.preventDefault()
  if (!title || !description) {
   alert("Title and description required")
  }
  try {
   const res = await fetch(`https://crud-5e31oeu5f-jeffs-projects-2f8cb560.vercel.app/api/topics`, {
    method: "POST",
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, description })
   })
   if (res.ok) {
    router.push("/")
   } else {
    throw new Error("Unable to create topic")
   }
  } catch (error) {
   console.log(error)
  }
 }

 return (
  <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm mx-auto">
   <input
    type="text"
    placeholder="Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="input input-bordered"
   />
   <input
    type="text"
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="input input-bordered"
   />
   <button type="submit" className="btn">Add</button>
  </form>
 )
}

export default AddTopic