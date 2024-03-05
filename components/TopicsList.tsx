import Link from "next/link"
import RemoveButton from "./RemoveButton"

const getTopics = async () => {
 try {
  const res = await fetch("https://crud-5e31oeu5f-jeffs-projects-2f8cb560.vercel.app/api/topics", {
   cache: "no-store"
  })
  if (!res.ok) {
   throw new Error("Unable to fetch topics")
  }
  return res.json()
 } catch (error) {
  console.log("Error loading topics", error)
 }
}

const TopicsList = async () => {
 const { topics } = await getTopics()

 return (
  <>
   {topics.map((item: any) => (
    <div key={item._id} className="p-4 border rounded-lg border-slate-300 my-3 flex justify-between gap-5 items-start">
     <Link href={`/editTopic/${item._id}`} className="grow">
      <h2 className="font-semibold text-2xl">{item.title}</h2>
      <p>{item.description}</p>
     </Link>
     <RemoveButton id={item._id} />
    </div>
   ))}
  </>
 )
}

export default TopicsList