export default function Header(){
    return(
        <header>
            <div className="bg-slate-900 text-center text-white py-[10px]">
                Free Shipping World wide for all orders over $199 <button className="underline cursor-pointer">Shop Now</button> 
            </div>
            <div className="flex items-center justify-between px-[50px] py-[20px] border-b-1 border-slate-900">
                <div>
                    <h1 className="text-slate-900 text-[39px] ">Ouali<span className="text-slate-500">Eco</span></h1>
                </div>

                <form class=" flex w-[400px]">
                    <input type="text" className=" flex items-center  w-[300px] pl-[10px] py-[4px] border focus:outline-none border-slate-900 rounded-sm rounded-r-none" placeholder="Search here ..." /> 
                    <button className="cursor-pointer px-[12px] py-[6px] text-white bg-slate-900 rounded-sm rounded-l-none  ">Search</button>  
                </form>

                <div>
                    <a><i className="fa-regular fa-user text-[25px] "></i></a>
                    <a><i className="fa-regular fa-heart text-[25px] ml-[20px]  relative after:content-['0'] after:absolute after:top-[-5px] after:right-[-6px] after:w-[15px] after:p-[3px] after:text-center after:text-[11px] after:text-white after:bg-slate-900 after:rounded-full"></i></a>
                    <a>
                        <i className="fa-brands fa-opencart ml-[20px] text-[25px] relative after:content-['0'] after:absolute after:top-[-5px] after:right-[-6px] after:w-[15px] after:p-[3px] after:text-center after:text-[11px] after:text-white after:bg-slate-900 after:rounded-full"></i>
                    </a>
                </div>
            </div>
            <div className="flex items-center px-[50px] py-[10px] border-b-1 border-slate-900 text-[19px]">
                <a href="#" className="mr-[20px]">Home</a>
                <a href="#" className="mr-[20px]">Shop</a>
                <a href="#" className="mr-[20px]">Categories</a>
                <a href="#" className="mr-[20px]">About</a>
                <a href="#" className="mr-[20px]">Contact</a>
            </div>
        </header>
    )
}