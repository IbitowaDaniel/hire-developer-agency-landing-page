import { ExploreData } from "@app/constants";
import { FaAngleRight } from 'react-icons/fa';
import { SectionHeader2 } from "@app/components/SectionHeaders";
import Image from "next/image";
import VideoBtn from "@app/components/VideoBtn";

const Explore = () => {

  return (
    <section className="boxWidth paddingX paddingY">
      {ExploreData.map((item, index) => (
        <div key={index} className="mx-auto md:max-w-full">
          <div className="">
            <SectionHeader2
              heading={item.MainTitle}
              headingSecondary={item.subTitle} />


            <div className={`flexCenter text-primary mt-5`}>
              <p className="font-bold text-base">
                <a>{item.CTA}</a>
              </p>
              <FaAngleRight className="w-6" />
            </div>
          </div>

          <div className="">
            {item.img.map((c, i) => (
              <div className="pt-8 max-w-full mx-auto relative">
                <Image
                  src={c.imgSrc}
                  alt={c.altText}
                  className="w-full rounded-[10px] md:max-w-3xl lg:max-w-4xl mx-auto" />

                <VideoBtn />
              </div>

            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Explore