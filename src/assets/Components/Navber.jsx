// Navber.jsx
import { useState } from "react";
import Link from "./Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navber = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <nav className="text-black p-6 mx-auto bg-yellow-200 sticky top-0 flex items-center justify-between">
            <div className="flex items-center md:ml-16">
                <div className="text-2xl font-bold mr-4">
                    Hero
                </div>
            </div>
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-20' : '-top-52'} bg-yellow-200 px-6 w-full md:w-auto`}>
                {routes.map(route => <Link key={route.id} route={route}></Link>)}
            </ul>
        </nav>
    );
};

export default Navber;
