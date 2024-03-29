import type { Metadata } from "next"
import { ReactNode } from "react";
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mt-8 px-8">
          {children}
        </div>
      </body>
    </html>
  )
}