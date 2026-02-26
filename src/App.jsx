import { Route, Routes } from "react-router-dom"
import AdminPage from "./pages/admin"
import HomePage from "./pages/home"
import LoginPage from "./pages/login"

function App() {
 
  return (
    <div className="w-full h-screen bg-amber-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/*" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
      

    </div>
  )
}

export default App
