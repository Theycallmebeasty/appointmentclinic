import Hero from "@/components/Layout/Hero";
import SectionHeaders from "@/components/Layout/SectionHeaders";
import ClientLogos from "@/components/Layout/ClientLogos";
import HomeMenu from "@/components/Layout/HomeMenu";

export default function Home() {
  return (
    <>
     <Hero />
     <div  className="mt-4">
     <HomeMenu/>
     </div>
     <div className="mt-4">
      <ClientLogos />
     </div>
    <section className="text-center px-8 py-2 bg-primary rounded-lg mt-10">
      <SectionHeaders 
        mainHeader={'Contact us'}
      />
      <div className="mt-8">
        <a className="text-4xl underline text-white" href="tel:09053905583">
        +2349 053 905 583
        </a>
      </div>
    </section>
    </>
  );
}

