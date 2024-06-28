
import Image from "next/image"

export default function Hero() {
   return  (
      <section className="relative mt-5">
        <div className="absolute inset-0 flex justify-center items-center w-full h-full">
          <Image src={'/Unijos.png'} layout={'fill'} objectFit={'cover'} alt={'home'} />
        </div>
        <div className="py-8 relative z-10">
          <h1 className="text-6xl text-gray-600 font-bold text-center italic">  <span   className="text-primary"> Dedicatated </span>To Providing  <span   className="text-blue-900"></span> Exceptional Care </h1>
           <p className="my-7 text-2xl text-primary font-semibold text-center">
             STAY FIT <span  className="text-gray-700">|</span> STAY STRONG <span className="text-primary"></span>
           </p>
        </div>
     </section>
     
   )
}