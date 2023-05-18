import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className='foot' >
                <div className='foot-head' >
                    <div className='foot-content' >
                        <Link className='icn' href="#">Home</Link>
                    </div>
                    <div className='foot-content'>
                        <Link href="#" className='icn'>About</Link>
                    </div>
                    <div className='foot-content'>
                        <Link href="#" className='icn'>Services</Link>
                    </div>
                    <div className='foot-content'>
                        <Link href="#" className='icn'>Contact</Link>
                    </div>
                </div>
                <div className='foot-end'>
                    &copy; 2023 Your Company. All rights reserved.
                </div>
            </footer>
        </>
    )
}
