import Cart from '../img/Cart.svg';
import Account from '../img/Account.svg';
import Search from '../img/Search.svg';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-90 py-4 px-4 md:px-[54px] lg:px-[184px] bg-white shadow">
            <nav className="text-nowrap flex items-center justify-between">
                <a href="#" className="integral text-2xl font-bold text-black">SPARTAN PARTS</a>
                <div className="flex items-center gap-4">
                    <ul className="hidden lg:flex satoshi flex-row items-center space-x-4 text-gray-600">
                        <li>
                            <select name="shop" id="shop" className="rounded p-1 outline-0 transition-colors duration-300 ease-in-out hover:text-black focus:text-black">
                                <option disabled={true} selected value="">Shop</option>
                            </select>
                        </li>
                        <li><a href="#" className="transition-colors duration-300 ease-in-out hover:text-black">On Sale</a></li>
                        <li><a href="#" className="transition-colors duration-300 ease-in-out hover:text-black">New Arrivals</a></li>
                        <li><a href="#" className="transition-colors duration-300 ease-in-out hover:text-black">Brands</a></li>
                    </ul>
                    <button 
                        className="lg:hidden p-2 rounded focus:outline-none focus:ring" 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <form className="satoshi hidden lg:flex flex-row-reverse p-2 gap-1 rounded-lg bg-[#F2F0F1] items-center">
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Search for products..."
                        className="outline-0" 
                    />
                    <button 
                        name='searchButton' 
                        id='searchButton' 
                        type="submit" 
                        className="hover:cursor-pointer"
                    >
                        <img className="hover:stroke-black" src={Search} alt="Search" />
                    </button>
                </form>
                <div className="hidden lg:flex gap-2">
                    <a href="#"><img src={Cart} alt="Cart" className="w-8 h-8" /></a>
                    <a href="#"><img src={Account} alt="Account" /></a>
                </div>
            </nav>

            {isOpen && (
                <ul className="lg:hidden mt-2 satoshi bg-white shadow-lg rounded-lg space-y-2">
                    <li className="list-none">
                        <select name="shop" id="shop" className="w-full rounded outline-0 transition-colors duration-300 ease-in-out hover:text-black focus:text-black">
                            <option disabled={true} selected value="">Shop</option>
                        </select>
                    </li>
                    <li className="list-none"><a href="#" className="block py-2 transition-colors duration-300 ease-in-out hover:text-black">On Sale</a></li>
                    <li className="list-none"><a href="#" className="block py-2 transition-colors duration-300 ease-in-out hover:text-black">New Arrivals</a></li>
                    <li className="list-none"><a href="#" className="block py-2 transition-colors duration-300 ease-in-out hover:text-black">Brands</a></li>
                    <form className="flex flex-row-reverse p-2 gap-1 rounded-lg bg-[#F2F0F1] items-center">
                        <input 
                            type="text" 
                            name="search" 
                            id="search" 
                            placeholder="Search for products..."
                            className="outline-0 w-full" 
                        />
                        <button 
                            name='searchButton' 
                            id='searchButton' 
                            type="submit" 
                            className="hover:cursor-pointer"
                        >
                            <img className="hover:stroke-black" src={Search} alt="Search" />
                        </button>
                    </form>
                </ul>
            )}
        </header>
    );
}

export default Navbar;