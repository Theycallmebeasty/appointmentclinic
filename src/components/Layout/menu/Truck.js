import Image from "next/image"


export default function MenuItems() {
   return(
      <div className="border border-red-700 p-8 rounded-lg text-center group hover:bg-red-200 hover:shadow-2xl hover:shadow-black transition-all">
       <div className="text-center">
       <img src="/aptwo.jpg"  className="max-h-auto max-h-24 block mx-auto" alt="truck"/>
       </div>
      <h4 className="font-semibold text-xl my-3">Acute illness</h4>
      <p className="text-gray-500 text-sm">
      Our policy is designed to accommodate each patient with the appropriate amount of time 
      </p>
   </div>
   );
}