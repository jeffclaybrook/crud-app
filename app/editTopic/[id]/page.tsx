import EditTopicForm from "@/components/EditTopicForm"

const getTopicById = async (id: string) => {
 try {
  const res = await fetch(`https://crud-5e31oeu5f-jeffs-projects-2f8cb560.vercel.app/api/topics/${id}`, {
   cache: "no-store"
  })
  if (!res.ok) {
   throw new Error("Unable to fetch topic")
  }
  return res.json()
 } catch (error) {
  console.log(error)
 }
}

const EditTopic = async ({
 params
}: {
 params: any
}) => {
 const { id } = params
 const { topic } = await getTopicById(id)
 const { title, description } = topic

 return (
  <EditTopicForm
   id={id}
   title={title}
   description={description}
  />
 )
}

export default EditTopic