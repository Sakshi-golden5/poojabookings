import React from 'react';
import Title from './Title';
import { testimonialsData } from '../assets/assets';

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-14 bg-slate-50 pt-10 pb-30">
      <Title 
        title="Testimonials" 
        subTitle="Our Pooja services offer personalized rituals tailored to your spiritual needs. With attention to detail and deep respect for tradition, we create a serene and transformative experience, ensuring peace and harmony in every pooja." 
      />
      <div className="flex flex-wrap justify-center gap-6 pt-30">

        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
            <div className="flex flex-col items-center px-5 py-4 relative">
              <img className="h-24 w-24 absolute -top-14 rounded-full" src={testimonial.imageUrl} alt={`testimonialImage${index + 1}`}/>
              <div className="pt-8 text-center">
                <h1 className="text-lg font-medium text-gray-800">{testimonial.name}</h1>
                {/* <p className="text-blue-800/80">{testimonial.role}</p> */}
              </div>
            </div>
            <p className="text-gray-500 py-4 px-7 text-center">{testimonial.reviewText}</p>
            <div className="flex justify-center pt-4">
              <div className="flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <svg key={idx} width="18" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" fill="#FF532E"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Testimonial;
