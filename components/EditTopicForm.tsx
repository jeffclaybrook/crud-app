"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const EditTopicForm = ({
 id,
 title,
 description
}: {
 id: string,
 title: string,
 description: string
}) => {
 const [newTitle, setNewTitle] = useState(title)
 const [newDescription, setNewDescription] = useState(description)

 const router = useRouter()

 const handleSubmit = async (e: any) => {
  e.preventDefault()
  try {
   const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
    method: "PUT",
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify({ newTitle, newDescription })
   })
   if (!res.ok) {
    throw new Error("Unable to update topic")
   }
   router.refresh()
   router.push("/")
  } catch (error) {
   console.log(error)
  }
 }

 return (
  <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm mx-auto">
   <input
    type="text"
    placeholder="Title"
    value={newTitle}
    onChange={(e) => setNewTitle(e.target.value)}
    className="input input-bordered"
   />
   <input
    type="text"
    placeholder="Description"
    value={newDescription}
    onChange={(e) => setNewDescription(e.target.value)}
    className="input input-bordered"
   />
   <button type="submit" className="btn">Update</button>
  </form>
 )
}

export default EditTopicForm