import { useState } from "react"

export default function TestPage(){

    const [count, setCount] = useState(0)
    
    return(
        <div className="w-full h-full bg-amber-200 flex justify-center items-center">
            <div className="w-[300px] h-[300px] bg-amber-50">
                <h1 className="text-[50px] flex justify-center items-center">{count}</h1>
                <div className="w-full h-[50px] border-2 flex justify-center gap-4">
                    <button onClick={
                        ()=>{
                            console.log("decrementing...")
                            setCount(-1)
                        }
                    }className="w-[100px] h-[50px] bg-blue-200">Decrement</button>
                    <button onClick={
                        ()=>{
                            console.log("increasing...")
                            setCount(+1)
                        }
                    }className="w-[100px] h-[50px] bg-fuchsia-500">increment</button>
                </div>
            </div>
        </div>
            
    )
}