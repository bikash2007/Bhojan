import { useState } from "react"

export const MenuList = ({items}) => {
    const [isOpen,setIsOpen]=useState(false)
    const [count, setCount] = useState(1)
    const actualPrice = items.price
    
    const [price, setPrice] = useState(actualPrice*count)
    console.log(price)
    
    return (
        
        <>
            
          
                <div className='flex flex-col px-2 py-4 gap-2 hover:scale-105 duration-200 w-[80%] md:w-96 rounded-lg overflow-hidden bg-white/30 backdrop-blur-3xl'>
                    <img src={items.image} className=''  />
                    <span>{items.rating }</span>
                    <h2 className='font-semibold'>{items.name}</h2>
                <h4>{items.des}</h4>
                  
                <h4 className='font-bold'>Rs {items.price}</h4>
                <button onClick={()=>{setIsOpen(true)}} className='px-4 rounded-xl text-base font-semibold bg-orange-600 text-white py-2 z-10' >Order now </button>
                     

            </div>
             {isOpen &&
                <div className='w-[90%] h-[80vh]  fixed  bg-white/50 backdrop-blur-3xl z-30 flex flex-wrap'>
                    <button onClick={()=>{setIsOpen(false)}} className="bg-red-700 px-3 rounded-xl text-white font-semibold py-1 absolute top-1 right-1">Close</button>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                        <img src={items.image} />
                    </div> 
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-start mt-11">
                      <h2 className='font-bold text-3xl'>{items.name}</h2>
                <h4 className="text-lg">{items.des}</h4>
                        <div className="flex gap-2 font-semibold">
                            <h4>Quantity</h4>
                            {count >1 &&

                                <button onClick={() => { setCount(count - 1) , setPrice(count*actualPrice) }} className="rounded-sm bg-slate-100 px-2">-</button>
                            }
                            <h2>{count}</h2>
                            <button onClick={() => { setCount(count + 1) , setPrice(count*actualPrice) }} className="rounded-sm bg-slate-100 px-2">+</button>
                        
                        </div> 
                <h4 className='font-bold'> Rs{price}</h4>
                <button onClick={()=>{setIsOpen(true)}} className='px-4 rounded-xl text-base font-semibold bg-orange-600 text-white py-2 z-10' >Order now </button>
                    </div> 
                </div>

            }
            
      
            </>
    )
}