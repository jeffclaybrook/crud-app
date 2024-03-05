import { NextResponse } from "next/server"
import Topic from "@/models/topic"
import db from "@/libs/db"

export async function POST(req: any) {
 const { title, description } = await req.json()
 await db()
 await Topic.create({ title, description })
 return NextResponse.json({ message: "Topic created" }, { status: 201 })
}

export async function GET() {
 await db()
 const topics = await Topic.find()
 return NextResponse.json({ topics })
}

export async function DELETE(req: any) {
 const id = req.nextUrl.searchParams.get("id")
 await db()
 await Topic.findByIdAndDelete(id)
 return NextResponse.json({ message: "Topic deleted" }, { status: 200 })
}