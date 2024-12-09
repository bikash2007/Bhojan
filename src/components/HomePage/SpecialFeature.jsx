import React from 'react'
import d4 from '../../media/4.jpg'
const SpecialFeature = () => {
  return (
      <div className='w-full flex flex-wrap mt-20 '>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
              <img src={d4} className='w-96' />
          </div>
          <div className='w-full md:w-1/2 flex justify-center mt-2 items-center flex-col gap-2'>
              <h1 className='font-bold text-2xl md:text-4xl text-center '>Food Is Always Good</h1>
              <h4 className='font-semibold text-base md:text-xl text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quisquam omnis fuga consequuntur accusamus sequi maiores voluptatibus impedit ex dolorum eligendi, nostrum id laboriosam ad vitae reprehenderit quo, laborum et?</h4>
          </div>
    </div>
  )
}

export default SpecialFeature