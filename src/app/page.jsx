//import Main from "./Home/page"
import { AuthProvider } from "@/context/AuthContext"
import Dashboard from "./dashboard/page"



export default function Home() {
  return (
  <main>
    <div>
      <Dashboard/>
    </div>
  </main>
  )
}
