"use client";

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaPlay } from 'react-icons/fa';
import { Video } from '@app/assets';
import Image from 'next/image';


const VideoBtn = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  return (
    <>
      <button
        type='button'
        className={`bg-white absolute w-[44px] h-[44px] md:w-[66px] md:h-[66px] xl:w-[120px] xl:h-[120px] top-[50%] left-[50%] translate-x-[-50%] xs:translate-y-[-50%] rounded-full flexCenter`}
        aria-label="Play video btn"
        onClick={openModal}>
        <FaPlay
          className="text-primary text-base lg:text-[22px] xl:text-[35px]" />
        <span
          className="bg-primary animate-playPulseAnim absolute w-[44px] h-[44px] md:w-[66px] md:h-[66px] xl:w-[120px] xl:h-[120px] rounded-full">
        </span>
      </button>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60 z-[50]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[100]">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-in duration-150 transform"
                enterFrom="opacity-0 translate-y-1/2"
                enterTo="translate-y-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative px-5 xs:px-8 transition-all">
                  <div className="md:mt-0">
                    {/*The Video was supposed to be inserted here but I used an Image instead*/}
                    <Image
                      src={Video}
                      className='w-full rounded-[10px] md:max-w-3xl lg:max-w-4xl mx-auto'
                      alt=''
                    />
                  </div>

                  <div className="z-50">
                    <button
                      type="button"
                      className="absolute -top-[3.5rem] right-0 text-white"
                      onClick={closeModal}
                    >
                      <IoMdClose
                        className='w-12 h-12' />
                    </button>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );

}

export default VideoBtn