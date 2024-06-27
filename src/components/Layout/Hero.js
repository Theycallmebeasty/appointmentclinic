
import Image from "next/image"

export default function Hero() {
   return  (
      <section className="relative mt-5">
        <div className="absolute inset-0 flex justify-center items-center w-full h-full">
          <Image src={'/Unijos.png'} layout={'fill'} objectFit={'cover'} alt={'home'} />
        </div>
        <div className="py-8 relative z-10">
          <h1 className="text-6xl text-blue-500 font-semibold text-center">Dedicatated To Providing  <span   className="text-primary"> Exceptional</span> Care !</h1>
           <p className="my-7 text-2xl text-red-700 text-center">
             STAY FIT <span  className="text-blue-900">|</span> STAY STRONG 
           </p>
        </div>
     </section>
     
   )
}