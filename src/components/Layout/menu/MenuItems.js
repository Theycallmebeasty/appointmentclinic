import Image from "next/image"


export default function MenuItems() {
   return(
      <div className="border border-red-700 p-8 rounded-lg text-center group hover:bg-red-200 hover:shadow-2xl hover:shadow-black transition-all">
       <div className="text-center">
       <img src="/myb.png"  className="max-h-auto max-h-24 block mx-auto" alt="shipping"/>
       </div>
      <h4 className="font-semibold text-xl my-3">Follow-up visits</h4>
      <p className="text-gray-500 text-sm">
      Non-urgent problems succh as hypertension or asthma
      </p>
   </div>
   );
}