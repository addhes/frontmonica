import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="container mx-auto">
            <div className="flex flex-wrap justify-between">
                <div className="w-full mb-8 md:mb-0 md:w-1/6 ml-4 md:ml-16">
                    <h6 className="text-white">Company</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link href=""><a className="text-gray-600 hover:text-teal-500 hover:underline">Undangan Digital</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-gray-600 hover:text-teal-500 hover:underline">Undangan Video</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-gray-600 hover:text-teal-500 hover:underline">Prewedings</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-gray-600 hover:text-teal-500 hover:underline">Design Undangan</a></Link>
                        </li>                                                                        
                    </ul>
                </div>
                <div className="w-full mb-8 md:mb-0 md:w-1/6 ml-4 md:ml-0">
                    <h6 className="text-white">Sosmed</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link href=""><a className="text-gray-600 hover:text-teal-500 hover:underline">Instagram</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-gray-600 hover:text-teal-500 hover:underline">Facebook</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-gray-600 hover:text-teal-500 hover:underline">WhatsApp</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-gray-600 hover:text-teal-500 hover:underline">YouTube</a></Link>
                        </li>                                                                        
                    </ul>
                </div>
                <div className="w-full mb-8 md:mb-0 md:w-1/6 ml-4 md:ml-0">
                    <h6 className="text-white">Company</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <a className="text-gray-400">Monica</a>
                        </li>
                        <li className="mt-2">
                            <a className="text-gray-400">Kp Sawah X No 12</a>
                        </li>
                        <li className="mt-2">
                            <a className="text-gray-400">Bekasi, Indonesia</a>
                        </li>
                        <li className="mt-2">
                            <a className="text-gray-400">Api Developer</a>
                        </li>                                                                        
                    </ul>
                </div>
                <div className="w-full mb-8 md:mb-0 md:w-1/6 ml-4 md:ml-0">
                    <h6 className="text-white">Contact</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link href=""><a className="text-gray-600 hover:text-teal-500 hover:underline">Api Developer</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-gray-400 hover:text-teal-500 hover:underline">Api Developer</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-gray-400 hover:text-teal-500 hover:underline">Api Developer</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-gray-400 hover:text-teal-500 hover:underline">Api Developer</a></Link>
                        </li>                                                                        
                    </ul>
                </div>                                            
            </div>
            <Link href="https://api.whatsapp.com/send/?phone=6289501018388&text=halo+saya+mau+tanya+tanya+nie&app_absent=0">
                <button className=" bg-teal-700 w-40 h-12 leading-11 text-right text-lg font-medium fixed bottom-20 text-white rounded-xl pr-3 hover:bg-teal-600 right-3 md:right-10">
                <a className="text-lg">Whatsapp</a>
                    <img src="/images/wa.png" width="31px" height="31px" className="absolute top-2 left-3" alt="logo whatsapp"/>
                </button>
            </Link>
            <div className="border-t pt-8 mt-8 border-gray-700 text-center">
                    <a className="text-gray-400">2020 Copyright Ade Setiawan</a>    
                </div>        
        </footer>
    )
}
