"use client";
import Link from 'next/link'

import {useState} from 'react'
import { faStaylinked,faFacebookF,faInstagram,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

export default function navBar() {
    // create a state for the menu visibility
  const [visible, setVisible] = useState(false);

  // create a function to toggle the state
  function toggleMenu() {
    setVisible((prev) => !prev);
  }

  return (
    <div>
      <nav>
            <div>
              <Link href="/" className='logo'>Xplore<FontAwesomeIcon className="fab" icon={faStaylinked} />kill</Link>
            </div>
            
            <div className="nav-links" id="navLinks" style={{ right: visible ? "0" : "-200px" }}>
                {/* <!-- Reposnive bar open and close --> */}
                {/* <i className="fa fa-times" /*onclick="hideMenu()"></i> */}
                <FontAwesomeIcon className='fa' icon={faTimes} onClick={toggleMenu} />
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/course">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <FontAwesomeIcon className='fa' icon={faBars} onClick={toggleMenu} />
            {/* <!-- Reposnive bar open and close --> */}
        </nav>
    </div>
  )
}
