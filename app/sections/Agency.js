import { AgencyData } from "@app/constants";
import { SectionHeader1 } from "@app/components/SectionHeaders";
import { IoIosCheckmarkCircle, } from 'react-icons/io';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from "next/link";
import Image from "next/image";


const Agency = () => (
  <section className="boxWidth paddingX paddingY">
    {AgencyData.map((item, index) => (
      <div key={index} className="xs:max-w-md mx-auto md:max-w-full md:flex flex-row-reverse">
        <div className="lg:max-w-md xl:pt-12">
          <SectionHeader1
            heading={item.MainTitle}
            headingSecondary={item.subTitle} />

          <div className='mt-6'>
            {item.features.map((c, i) => (
              <ul key={i} className="flex gap-x-1 sm:gap-x-2">
                <button className={`w-6 text-[#DADADA] p-0 text-xl cursor-none xs:text-2xl flex-shrink-0`} aria-label="list icon">
                  <IoIosCheckmarkCircle />
                </button>
                <li className="py-2 text-base text-text_secondary list-none">
                  {c.text}
                </li>
              </ul>
            ))}
          </div>

          <div className={`flexCenter md:items-start md:justify-start text-primary mt-5`}>
            <p className="font-bold text-base">
              <Link href="#">
                {item.CTA}</Link>
            </p>
            <ChevronRightIcon className="w-6" />
          </div>
        </div>

        <div>
          {item.img.map((c, i) => (
            <div className="pt-8 max-w-full w-full mx-auto md:-mt-10 lg:-mt-[3rem]">
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

export default Agency