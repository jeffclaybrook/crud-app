import { NextResponse } from "next/server"
import Topic from "@/models/topic"
import db from "@/libs/db"

export async function PUT(req: any, { params }: { params: any }) {
 const { id } = params
 const { newTitle: title, newDescription: description } = await req.json()
 await db()
 await Topic.findByIdAndUpdate(id, { title, description })
 return NextResponse.json({ message: "Topic updated" }, { status: 200 })
}

export async function GET(req: any, { params }: { params: any }) {
 const {id } = params
 await db()
 const topic = await Topic.findOne({ _id: id })
 return NextResponse.json({ topic }, { status: 200 })
}