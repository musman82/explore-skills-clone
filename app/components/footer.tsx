import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function footer() {
  return (
    <section className="footer">
        <hr />
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
        </p>

        <div className="icons">
            <FontAwesomeIcon className="fab" icon={faFacebookF} />
            <FontAwesomeIcon className="fab" icon={faInstagram} />
            <FontAwesomeIcon className="fab" icon={faTwitter} />
            <FontAwesomeIcon className="fab" icon={faLinkedin} />
        </div>
        <p>Made with <FontAwesomeIcon className='fas' icon={faHeart} /> by <Link href="/">Muhammad Usman</Link></p>
        <p>Copyright © 2021 <Link href="/">Xplore Skill</Link>. All Rights Reserved</p>
    </section>
  )
}
