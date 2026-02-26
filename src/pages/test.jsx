export default function TestPage(){
    return(
        <div className="w-full h-full border-4 relative flex flex-wrap">
            <div className="w-[200px] h-[200px] border-4 absolute top-0 left-0">Box 01</div>
            <div className="w-[200px] h-[200px] border-4 absolute top-0 right-0 m-2 p-2 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis commodi ea est consectetur, dolor quam doloremque alias sit ex odio illo, </div>
            <div className="w-[200px] h-[200px] border-4 absolute bottom-0 left-0 mt-[20px] mb-[20px]"></div>
            <div className="w-[200px] h-[200px] border-4 absolute bottom-0 right-0"></div>
            
        </div>
    )
}