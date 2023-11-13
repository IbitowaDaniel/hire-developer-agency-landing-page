import { SupportData } from "@app/constants";
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from "next/image";

const Support = () => (
  <section className="boxWidth paddingX paddingY">
    {SupportData.map((item, index) => (
      <div key={index} className="xs:max-w-md mx-auto md:max-w-full lg:flex flex-row-reverse gap-x-4">
        <div className="lg:max-w-md xl:pt-12">

          <div className="text-center lg:text-left md:max-w-lg mx-auto">
            <h3 className={`textHeadingSecondary lg:text-4xl lg:leading-[3rem] xl:leading-[3.5rem] xl:text-[42px]`}>{item.title}</h3>
            <p className={`textHeadingP my-4`}>{item.subTitle}</p>
            <p className={`textHeadingP opacity-60`}>{item.text}</p>
          </div>

          <div className={`flexCenter lg:items-start lg:justify-start text-primary mt-5`}>
            <p className="font-bold text-base">
              <a>{item.CTA}</a>
            </p>
            <ChevronRightIcon className="w-6" />
          </div>
        </div>

        <div>
          {item.img.map((c, i) => (
            <div className="max-w-full w-full mx-auto lg:-mt-[3rem]">
              <Image
                src={c.imgSrc}
                alt={c.altText}
                className="" />
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Support