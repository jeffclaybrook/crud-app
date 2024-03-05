"use client"

import { useRouter } from "next/navigation"
import { HiOutlineTrash } from "react-icons/hi"

const RemoveButton = ({
 id
}: {
 id: string
}) => {
 const router = useRouter()
 
 const removeTopic = async () => {
  const confirmed = confirm("Are you sure?")

  if (confirmed) {
   const res = await fetch(`https://crud-5e31oeu5f-jeffs-projects-2f8cb560.vercel.app/api/topics?id=${id}`, {
    method: "DELETE"
   })

   if (res.ok) {
    router.refresh()
   }
  }
 }

 return (
  <button onClick={removeTopic} className="text-red-400 btn">
   <HiOutlineTrash size={20} />
  </button>
 )
}

export default RemoveButton