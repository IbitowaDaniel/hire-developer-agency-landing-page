"use client";

import { SectionHeader3 } from "@app/components/SectionHeaders";
import { TutorialData } from "@app/constants";
import { Comments } from "@app/assets";
import NextPrevButton from "@app/components/NextPrevButton";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Tutorial = () => (
  <section id="tutorials" className={`bg-gray mt-20`}>

    <div className="boxWidth paddingX paddingY pb-20">
      <div className="lg:pb-20">
        {TutorialData.map((item, index) => (
          <div key={index} className=''>
            <SectionHeader3
              heading={item.subTitle}
              headingSecondary={item.MainTitle} />

            <div className='mt-6'>
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className="-mx-3"
                containerClass=""
                customButtonGroup={<NextPrevButton />}
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
                {item.features.map((c, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-md mt-5 mb-8 mx-4 xs:mx-auto max-w-full xs:max-w-sm sm:max-w-[300px] md:max-w-[340px] lg:max-w-[300px] xl:max-w-[340px]">
                    <div className="rounded-t-lg overflow-hidden">
                      <Image src={c.image} className="w-full" alt="tutorial thumbnail" />
                    </div>

                    <div className="px-5 pt-3.5 pb-5 xs:py-6">
                      <div>
                        <a href={c.path} alt={c.title}>
                          <h3 className="font-semibold text-base text-black hover:text-primary mb-3">{c.title}</h3></a></div>

                      <div className="flex gap-x-2">
                        <Image
                          src={Comments}
                          className="w-6"
                          alt=""
                          />
                        <p className="text-text text-base">{c.comments}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Tutorial