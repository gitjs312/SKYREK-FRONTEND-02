import { Route, Routes } from "react-router-dom"
import AdminPage from "./pages/admin"
import HomePage from "./pages/home"
import LoginPage from "./pages/login"
import TestPage from "./pages/test"

function App() {
 
  return (
    <div className="w-full h-screen">

     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/*" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
      

    </div>
  )
}

export default App
