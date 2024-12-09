import hero from '../../media/hero.jpg'
export const Hero = () => {

    return (
        <div className="flex flex-wrap w-full p-4 mt-24 mb-44  ">
            <div className=" w-full md:w-1/2 flex flex-col gap-3 px-4 justify-center ">
                <h1 className="font-bold text-4xl md:text-6xl  text-center">Delicious food is waiting for you</h1>
                < p className='font-semibold max-w-3xl text-base text-center md:text-xl' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quasi laboriosam consectetur alias ut asperiores reiciendis nobis inventore veniam quaerat voluptates, ipsum quas expedita optio officia ab dicta quae ea?</p>
                <div className='w-full flex  mt-2 justify-center gap-6 '>
                    <button className='px-4 rounded-xl text-base font-semibold bg-orange-600 text-white py-2' >food menue </button>
                    <button className='px-4 rounded-xl text-base font-semibold py-2 bg-slate-100/30 backdrop-blur-xl'>Book table</button>
             </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center mt-8 items-center ">
                <img src={hero} className='w-96 h-96 rounded-full object-cover animate-spin-slow' />
            </div>
        </div>
    )
}