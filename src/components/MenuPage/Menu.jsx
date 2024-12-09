import React, { useState } from 'react'
import { MenuList } from '../MenuList'
import d1 from '../../media/1.jpg'
import d2 from '../../media/2.jpg'
import d3 from '../../media/3.jpg'
import d4 from '../../media/4.jpg'
const Menu = () => {
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
        },
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
        },
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
      <>
      <div  className='flex flex-col w-full justify-center items-center gap-4'>
          <h1 className='text-3xl md:text-5xl font-bold'>Our Menu</h1>
          <h1 className='text-xl md:text-2xl font-semibold text-center'>This is our menu section choose the dish and order now </h1>
          <div className='flex flex-wrap w-full justify-center gap-6'>
                  {menuItems.map((items) => (
                      <MenuList items={items} />
                    ))}
          </div>
            </div>
           
                    </>
  )
}

export default Menu