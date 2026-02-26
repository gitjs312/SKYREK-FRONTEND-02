import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className="w-full h-full bg-blue-300 flex">
            <div className="w-[300px] h-full bg-amber-200 flex flex-col">
                <Link to="/admin/">Orders</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/users">Users</Link>

            </div>
            <div className="flex-1 h-full bg-amber-500">
                    <Routes>
                        <Route path="/" element={<div>orders page</div>} />
                        <Route path="/products/*" element={<div>product page</div>} />
                        <Route path="/users" element={<div>users page</div>} />
                    </Routes>
            </div>


        </div>
    )
}