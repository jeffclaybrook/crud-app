import Link from "next/link"

const Navbar = () => (
 <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
  <Link href={"/"} className="text-white font-bold btn btn-ghost">JClaybrook</Link>
  <Link href={"/addTopic"} className="btn">Add Topic</Link>
 </nav>
)

export default Navbar