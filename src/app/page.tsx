import Link from "next/link"
import { Button } from "./components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to Our App</h1>
      <div className="space-x-4">
        <Link href="/login">
          <Button>Log In</Button>
        </Link>
        <Link href="/signup">
          <Button variant="outline">Sign Up</Button>
        </Link>
      </div>
    </div>
  )
}

