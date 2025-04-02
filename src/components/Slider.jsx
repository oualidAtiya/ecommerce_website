import { useState } from "react"

export default function Slider(){
    const slides = [
        {url :"/images/slide1.png" },
        {url :"/images/slide2.png" },
    ]
    const [index,setIndex] = useState(0);
    function next(){
        if(index === slides.length -1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }
    function prev(){
        if(index > 0){
            setIndex(index-1)
        }else{
            setIndex(slides.length - 1)
        }
    }
    return(
        <div className="flex items-center justify-between relative h-[80vh] overflow-hidden bg-gray-100">
            <div className="absolute right-[50px] top-[50%]  bg-slate-900 text-[17px]  text-white h-[35px] w-[35px]  pl-[12px]  pt-[6px] rounded-full  cursor-pointer " onClick={next}>
            <i class="fa-solid fa-greater-than"></i>
            </div>
            <div className="w-1/2 h-[600px] overflow-hidden">
                <img src={slides[index].url} alt="slide" className="w-[200%] h-[100%] object-cover object-[100px]  duration-300 ease-in-out" />
            </div>
            <div className="w-1/2">
                <h3 className="font-semibold text-[12px] text-slate-800">THIS WEEK'S HIGHLIGHTS</h3>
                <h2 className="text-[40px] font-bold text-slate-800 mt-[15px]">Full Sleeve Solid Hooded Men's Sweatshirt</h2>
                <p className="text-[20px] font-light mb-[20px] w-[440px]">There are many variations of passages of lorem Ipsum available but the majority have suffered</p>
                <button className="bg-slate-900 text-white font-light p-[10px] cursor-pointer">SHOP NOW</button>
            </div>
            <div className="absolute left-[50px] top-[50%]  bg-slate-900 text-[17px]  text-white h-[35px] w-[35px]  pl-[10px]  pt-[6px] rounded-full cursor-pointer" onClick={prev}>
                <i class="fa-solid fa-less-than"></i>
            </div>
        </div>
    )
}