import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="w-full h-full bg-[url('/background-image.jpg')] bg-cover bg-center no-repeat flex items-center justify-center">
            
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="backdrop-blur-lg w-[400px] h-[500px] shadow-2xl rounded-4xl flex flex-col justify-center">
                    <input type="email" placeholder="email" className="m-5 p-3 w-[90%] h-[50px] rounded-lg text-white border-b-3" />
                    <input type="password" placeholder="password" className="m-5 p-3 w-[90%] h-[50px] rounded-lg text-white" />
                    <p className="text-white w-full text-right">Forgot password ? <Link to="/forgot-password" className="text-blue-600 pr-20">Reset</Link></p>
                    <button className="m-5 w-3 w-[90%] h-[50px] rounded-lg bg-blue-500 text-white font-bold">Login</button>
                    <button className="m-5 w-3 w-[90%] h-[50px] rounded-lg bg-blue-500 text-white font-bold">Login with Google</button>
                    <p className="text-white w-full text-right">Dont have an account ? <Link to="/register" className="text-blue-600">Register</Link></p>
                </div>
            </div>
        </div>
    )
}