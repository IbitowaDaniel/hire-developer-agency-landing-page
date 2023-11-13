import { BannerImage } from "@app/assets";
import { SponsorsData } from "@app/constants";
import Image from "next/image";
import Link from "next/link";



const Hero = () => (
  <section id="home" className="bg-[#F6F8FB]">

    <div className="boxWidth paddingX">
      <div className="py-10 lg:pt-16 md:flex">
        <div className="xs:max-w-md md:max-w-[320px] lg:max-w-md xl:max-w-lg flex-shrink-0">
          <h1 className="font-bold text-black text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[2.2rem] xl:text-[3rem] mb-4 max-w-full xs:max-w-sm sm:max-w-md md:max-w-[320px] lg:max-w-md xl:max-w-lg leading-[2.7rem] xs:leading-[3rem] sm:leading-[3.5rem] md:leading-[3rem] xl:leading-[4rem]">
            Great software is built with amazing developers
          </h1>
          <p className="text-text_secondary text-[15px] xs:text-base md:text-[15px] lg:text-[17px] lg:max-w-sm leading-[1.6rem] lg:leading-[2rem]">
            We help build and manage a team of world-class developers to bring your vision to life
          </p>

          <div className="mt-4">
            <form action="#" method="POST">
              <div className="flex gap-x-4">
                <label htmlFor="email" className="sr-only">Enter your Email Address to subscribe to our newsletter</label>
                <input
                  name="subscribe"
                  id="subscribe"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white rounded-[4px] px-4 border-0 outline-none shadow placeholder:text-sm"
                />

                <button
                  type="submit"
                  className="rounded-[4px] p-3 lg:p-4 outline-none text-sm lg:text-base font-bold text-white bg-primary"
                  aria-label="Subscribe">
                  Subscribe
                </button>

              </div>
            </form>
          </div>

          <div className='mt-6'>
            <p className='opacity-60 text-[#566272] text-base mb-4'>
              Sponsored by:
            </p>
            <div className='flex gap-x-3 mt-4 sm:mt-0'>
              {SponsorsData.map((item) => (
                <Link key={item.id} href={item.path} >
                  <Image src={item.image} alt={item.title} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 w-full mx-auto lg:-mt-4">
          <Image
            src={BannerImage} 
            className="mix-blend-darken"
            alt="banner image"
            />
        </div>

      </div>
    </div>

  </section>
);

export default Hero