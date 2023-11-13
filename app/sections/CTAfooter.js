import { CTAbtn, CTAshape } from "@app/assets";
import Image from "next/image";


const CTAfooter = () => (
  <section className="boxWidth paddingX">
    <div className="bg-primary rounded-[12px] py-[45px] px-[30px] lg:px-[60px] mt-0 flex items-center text-center flex-col justify-center lg:flex-row lg:justify-between lg:text-left lg:-mt-[6rem] xl:-mt-[6.5rem]">
      <h3 className="text-white font-bold xs:max-w-sm sm:max-w-md lg:max-w-sm xl:max-w-full text-[1.5rem] leading-[2.2rem] xs:text-[1.8rem] xs:leading-[2.5rem] sm:text-[2rem] lg:text-[1.8rem] lg:leading-[2.5rem] xl:text-[2rem] xl:leading-[3rem] mb-[20px] xs:mb-[35px] lg:mb-[0px]">
        Hire the world's best developers <br className="hidden xl:block" /> and designers around!
      </h3>
      <Image
        src={CTAshape}
        className="hidden lg:block -mt-10"
        aria-hidden="true"
        alt=""
      />

      <div className="flex flex-col gap-y-2 justify-center items-center">
        <Image
          src={CTAbtn}
          className=""
          alt=""
          aria-hidden="true" />
        <button
          className="bg-white text-primary text-sm xl:text-base rounded-[5px] font-semibold tracking-widest py-[10px] px-[24px] xl:py-[15px] relative outline-none hover:bg-black hover:text-white uppercase"
          aria-label="Hire Developers"
        >
          Hire Developers
        </button>
        <Image
          src={CTAbtn}
          alt=""
          className="rotate-180"
          aria-hidden="true" />

      </div>
    </div>

  </section>
);

export default CTAfooter