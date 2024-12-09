export const ContactUs = () => {
    return (
        <div className="w-full flex flex-col justify-cente gap-4 items-center sm:py-4 md:py-24">
            <h1 className="text-3xl font-bold md:text-5xl ">Contact Us</h1>
            <h1 className="text-xl font-semibold md:text-2xl ">Contact Us to explore delicious food </h1>
            <div className="w-[90%] bg-slate-200/50 backdrop-blur-3xl gap-4 md:w-[60%] flex flex-col p-3 mt-24 rounded-lg overflow-hidden" >
                <h1 className="text-center font-bold">Fill the details here</h1>
                <input type="text" className="w-full rounded-lg h-10 outline-orange-400 px-4" placeholder="Full Name"/>
                <input type="email" className="w-full rounded-lg h-10 outline-orange-400 px-4" placeholder="Email"/>
                <input type="number" className="w-full rounded-lg h-10 outline-orange-400 px-4" placeholder="Number"/>
                <textarea className="w-full rounded-lg min-h-36 outline-orange-400 px-4" placeholder="massage here 😎 !" />
                <button className="px-4 py-2 bg-orange-600 active:scale-95 text-white font-semibold rounded-xl">Submit</button>

            </div>
        </div>
    )
}