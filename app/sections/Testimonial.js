"use client";

import { SectionHeader3 } from "@app/components/SectionHeaders";
import { TestimonialData } from "@app/constants";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1220 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1220, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};


const Testimonial = () => (
  <section id="testimonials" className="boxWidth paddingX paddingY">
    {TestimonialData.map((item, index) => (
      <div key={index} className=''>
        <SectionHeader3
          heading={item.subTitle}
          headingSecondary={item.MainTitle} />

        <div className=''>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={4000}
            autoPlay={true}
            centerMode={false}
            className="-mx-3"
            containerClass=""
            customButtonGroup=""
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {item.reviews.map((c, i) => (
              <div key={i} className='my-4 mx-1 max-w-full xs:max-w-md xs:mx-auto sm:max-w-lg md:max-w-2xl xl:max-w-3xl'>
                <p className='text-text leading-10 text-lg md:text-[24px] md:leading-[3.2rem] xl:text-[26px] xl:leading-[3.6rem] text-center font-serif'>{c.description}</p>

                <div className='text-center mb-6 mt-10 max-w-[12rem] mx-auto bg-[#f3ecf3] border-t-4 border-primary pb-4'>
                  <div className="mt-3">
                    <Image
                      src={c.avatar}
                      className="max-w-full mx-auto" 
                      alt="avatar"
                      /> </div>
                  <div>
                    <h4 className='text-black text-base font-bold'>{c.name}</h4>
                    <p className='text-heading_secondary opacity-80'>{c.designation}</p>
                  </div>
                </div>

              </div>
            ))}
          </Carousel>
        </div>
      </div>
    ))}

  </section>
);

export default Testimonial