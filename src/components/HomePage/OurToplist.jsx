import React from 'react'
import { MenuList } from '../MenuList'
import d1 from '../../media/1.jpg'
import d2 from '../../media/2.jpg'
import d3 from '../../media/3.jpg'
import d4 from '../../media/4.jpg'
const OurToplist = () => {
    const menuItems = [
        {
            image:d1,
            rating:`⭐⭐⭐⭐⭐`,
            name: 'chiken tikka',
            des: 'this is very delicious dish of all time',
            price:599
        },
        {
            image:d2,
            rating:`⭐⭐⭐⭐⭐`,
            name: 'chiken tikka',
            des: 'this is very delicious dish of all time',
            price:599
        },
        {
            image:d3,
            rating:`⭐⭐⭐⭐⭐`,
            name: 'chiken tikka',
            des: 'this is very delicious dish of all time',
            price:599
        }
    ]
  return (
    <div className='flex flex-col gap-4 justify-center items-center '>
            <h1 className='text-4xl font-bold '>Top list </h1>
            <h1 className='text-xl  mb-5'>Our top list </h1>
            

          <div className="w-full flex flex-wrap gap-6 justify-center ">
              {menuItems.map((items) => (
                  <MenuList items={items} />
              ))}
        </div>
            </div>
  )
}

export default OurToplist