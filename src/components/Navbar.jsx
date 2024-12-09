import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="flex w-full px-14 py-4 justify-between  ">
            <h1 className="font-bold text-orange-600 text-xl md:text-4xl">Bhojan</h1>
            <nav className="flex gap-5">
                <NavLink to={'/'} className={({isActive})=> `text-sm font-semibold md:text-xl hover:border-b-2 actiborder-b-2 border-orange-600 cursor-pointer ${isActive ?' border-b-2':''}`  }>Home</NavLink>
                <NavLink to={'/menu'} className={({isActive})=> `text-sm font-semibold md:text-xl hover:border-b-2 actiborder-b-2 border-orange-600 cursor-pointer ${isActive ?' border-b-2':''}`  }>Menu</NavLink>
                <NavLink to={'/contact-us'} className={({isActive})=> `text-sm font-semibold md:text-xl hover:border-b-2 actiborder-b-2 border-orange-600 cursor-pointer ${isActive ?' border-b-2':''}`  }>Contact Us</NavLink>
            </nav>
        </div>
    )
}