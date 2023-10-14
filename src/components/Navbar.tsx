"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { NavItemsLeft, NavItemsRight } from "@/constants";
import { motion } from "framer-motion";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className="padding-container relative top-0 z-40 py-5 hidden lg:flex items-center justify-center flex-row bg-gradient-to-b from-gray-800 from-10% via-gray-700 via-60% 4xl:py-14">
                <ul className="flexBetween gap-5 4xl:gap-12">
                    {NavItemsLeft.map((link, index) => {  
                        const isActive = (pathname?.includes(link.path) && link.path.length > 1) || pathname === link.path;
                        
                        return (
                            <motion.li 
                                key={index} 
                                initial={{ color: isActive ? '#FEC601' : '#fff' }}
                                whileHover={{
                                    color: '#FEC601',
                                    transition: {
                                        duration: 0.2
                                    }
                                }}
                                className="inline-block mr-5"
                            >
                                <Link href={link.path} className="regular-20 4xl:regular-64">
                                    {link.title}
                                </Link>
                            </motion.li>
                        )
                    })}
                    <Link href="/">
                        <Image
                            src="https://ik.imagekit.io/shakedkod/shakedkod-podcasts/logo.png?updatedAt=1697326253663"
                            alt="ShakedKod's logo"
                            width={50}
                            height={50}
                            className="cursor-pointer mx-7 4xl:w-[12rem]"
                        />
                    </Link>
                    {NavItemsRight.map((link, index) => {  
                        const isActive = (pathname?.includes(link.path) && link.path.length > 1) || pathname === link.path;
                        
                        return (
                            <motion.li 
                                key={index} 
                                initial={{ color: isActive ? '#FEC601' : '#fff' }}
                                whileHover={{
                                    color: '#FEC601',
                                    transition: {
                                        duration: 0.2
                                    }
                                }}
                                className="inline-block mr-5"
                            >
                                <Link href={link.path} className="regular-20 4xl:regular-64">
                                    {link.title}
                                </Link>
                            </motion.li>
                        )
                    })}
                </ul>
            </nav>
            <nav className="flexBetween max-container padding-container relative z-30 py-5 lg:hidden bg-gradient-to-b from-gray-800 from-10% via-gray-700 via-35% xs:via-40%">
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        alt="ShakedKod's logo"
                        width={32}
                        height={32}
                        className="cursor-pointer"
                    />
                </Link>

                {toggle ? <motion.div 
                    initial={{ x: 250 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 right-0 w-2/3 h-full bg-slate-950 transition-colors duration-300"
                >
                    <Image
                        src="/assets/close.svg"
                        alt="close"
                        width={40}
                        height={40}
                        className="inline-block cursor-pointer lg:hidden m-5"
                        onClick={() => setToggle(false)}
                    />
                    <ul className="flexBetween flex-col gap-5 regular-32">
                        {[...NavItemsLeft, ...NavItemsRight].map((link, index) => {
                            const isActive = (pathname?.includes(link.path) && link.path.length > 1) || pathname === link.path;
                            
                            return (
                                <motion.li 
                                    key={index} 
                                    initial={{ color: isActive ? '#FEC601' : '#fff' }}
                                    whileHover={{
                                        color: '#FEC601',
                                        transition: {
                                            duration: 0.2
                                        }
                                    }}
                                    className="inline-block mr-5"
                                >
                                    <Link href={link.path} onClick={() => setToggle(false)} className="regular-20">
                                        {link.title}
                                    </Link>
                                </motion.li>
                            )
                        })}
                    </ul>
                </motion.div> : <>
                    <Image
                        src="/assets/menu.svg"
                        alt="menu"
                        width={32}
                        height={32}
                        className="inline-block cursor-pointer lg:hidden"
                        onClick={() => setToggle(true)}
                    />
                </>}
            </nav>
        </>
    );
};

export default Navbar;