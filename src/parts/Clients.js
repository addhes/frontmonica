import React from 'react'
import Fade from 'react-reveal'

export default function Clients() {
    return (
        <div className="flex flex-wrap justify-between items-center">
            <Fade top>
            <div className="w-full sm:w-1/6 mb-14 md:mb-0">
                <img src="/images/logo_amazon.svg" alt="logo amazon" className="mx-auto" />
            </div>
            <div className="w-full sm:w-1/6 mb-14 md:mb-0">
                <img src="/images/logo_facebook.svg" alt="logo facebook" className="mx-auto" />
            </div>
            <div className="w-full sm:w-1/6 mb-14 md:mb-0">
                <img src="/images/logo_microsoft.svg" alt="logo facebook" className="mx-auto" />
            </div>   
            <div className="w-full sm:w-1/6 mb-14 md:mb-0">
                <img src="/images/logo_tesla.svg" alt="logo facebook" className="mx-auto" />
            </div>
            <div className="w-full sm:w-1/6 mb-14 md:mb-0">
                <img src="/images/logo_google.svg" alt="logo facebook" className="mx-auto" />
            </div>
            </Fade>                                                      
        </div>
    )
}
