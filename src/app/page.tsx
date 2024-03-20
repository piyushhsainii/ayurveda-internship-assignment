import { Cross, ThumbsDown, ThumbsDownIcon, ThumbsUp, X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
   <div className="w-[100vw] h-screen flex my-10 justify-center items-center" >
    <div className="w-[320px] min-h-[75vh] bg-white rounded-2xl " >
      <div className="flex flex-col">
        <div className="m-4" > <X color="black" /> </div>
        <div className="mx-5 font-bold text-3xl"> Leave a review </div>
      </div>
      <div className="my-5">
        <div className="mx-5 text-xl font-semibold ">Safety</div>
        <div className="mx-5 text-sm my-1">Safety Description Here</div>
        <div><img src="/stars.png" className="w-[200px] mx-3" alt="" /></div>
      </div>
      <div className="my-5">
        <div className="mx-5 text-xl font-semibold">Communication</div>
        <div className="mx-5 text-sm my-1">Communication Description here</div>
        <div><img src="/stars.png" className="w-[200px] mx-3" alt="" /></div>
      </div>
      <div className="my-5">
        <div className="mx-5 text-lg font-semibold">Would you recommend Trausti?</div>
        <div className="mx-5 text-sm my-1">Description here</div>
        <div><img src="/stars.png" className="w-[200px] mx-3" alt="" /></div>
        <div className="flex gap-8 mx-5 items-center ">
          <div className="flex justify-center gap-3 items-center"> <div><ThumbsDownIcon color="grey" width={22} /></div> <span> No</span> </div>
          <div className="flex justify-center gap-3 items-center"> <div> <ThumbsUp color="green"  width={22} fill="green"/> </div >  <div className="text-green-600" >Yes</div> </div>
        </div>
      </div>
      <div className="my-10">
        <div className="mx-5 text-xl font-semibold">Praise</div>
        <div className="mx-5 text-sm my-1">Praise Description here</div>
      </div>
      <div></div>
      <div></div>
    </div>
   </div>
  );
}
