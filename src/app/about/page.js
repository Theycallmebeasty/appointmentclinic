import React from 'react';
import Image from "next/image"
import SectionHeaders from '../../components/Layout/SectionHeaders';

const AboutPage = () => {
   return (
      <>
        <section className="relative mt-4 ">

            <div className="absolute top-0 left-0 w-full h-full">
              <Image src={'/ajos.jpg'} layout={'fill'} objectFit={'cover'} alt={'about'} />
            </div>
          <div className="py-8 ">
             <p className="my-7 text-2xl text-white relative z-10 italic font-semibold">
             HEALTHY HEART <span  className="text-blue-900">|</span> HAPPY START
            </p>
          </div>
        </section>
      <section className='text-center mt-4 bg-gray-100 pb-8'>
         <div className="text-center px-8 py-2 bg-primary rounded-lg">
           <SectionHeaders 
             mainHeader={'About us'}
            />
         </div>
      
         <div className="text-gray-500 max-w-3xl mx-auto mt-4 flex flex-col gap-4">
           <p>

             Welcome to UJ Clinic, your dedicated partner in healthcare. At UJ Clinic, we pride ourselves on delivering compassionate and comprehensive medical services tailored to meet your individual needs. Whether you're seeking routine check-ups, specialized treatments, or expert medical advice, our team of experienced professionals is here to provide you with the highest standard of care.

            Founded on the principles of integrity, innovation, and patient-centricity, UJ Clinic has been serving the community for [number]  years. We are committed to fostering a healing environment where every patient feels valued, heard, and respected. Your health and well-being are our top priorities, and we strive to exceed your expectations in every interaction.
           </p>
           <p>
            Our state-of-the-art facilities are equipped with advanced technology and modern amenities to ensure accurate diagnoses and effective treatments. From our comfortable waiting areas to our specialized treatment rooms, we have designed every aspect of our clinic withyour comfort and convenience in mind.

            At UJ Clinic, we offer a wide range of medical services, including but not limited to:

            Routine check-ups and preventive care
            Chronic disease management
            Vaccinations and immunizations
            Women's health services
            Pediatric care
            Dermatology and skincare treatments
            Mental health counseling
            Rehabilitation services

            Our team consists of highly skilled healthcare professionals who are dedicated to continuous learning and professional development. We     collaborate closely with each other and with you to create personalized treatment plans that address your unique health needs and goals.

            Beyond our clinical expertise, we take pride in our commitment to patient education and empowerment. We believe that informed patients make healthier choices, so we take the time to explain diagnoses, treatments, and preventive measures in clear, understandable language.
            </p>
            <p>
             As a part of the community, we are actively involved in local health initiatives and outreach programs. We believe in giving back and making a positive impact beyond the walls of our clinic.

             Thank you for considering UJ Clinic for your healthcare needs. We are honored to be your trusted partner in wellness, and we look forward to serving you and your family for many years to come.

            Contact us today to schedule your next appointment or to learn more about our services. Your health journey starts here, at UJ Clinic.

            </p>
          </div>
      </section>
      </>
   );
};

export default AboutPage;