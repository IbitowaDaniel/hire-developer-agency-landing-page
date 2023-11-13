import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';




const NextPrevButton = ({ next, previous }) => {
  return (
    <section className='w-full flex justify-center mt-4'>
      <div>
        <div className='flex justify-center gap-x-2'>
          <button className='bg-transparent text-[20px] cursor-pointer text-[#BBC7D7] hover:text-primary focus:outline-0 transition duration-200' onClick={previous} aria-label="Previous">
            <FaLongArrowAltLeft />
          </button>
          <button className='bg-transparent text-[20px] cursor-pointer text-[#BBC7D7] hover:text-primary focus:outline-0 transition duration-200' onClick={next} aria-label="Next">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default NextPrevButton
