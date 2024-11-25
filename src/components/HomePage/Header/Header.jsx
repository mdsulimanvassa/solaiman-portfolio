
import Image from 'next/image';
import './Header.css';
import user from '../../../assets/solaiman-user.png'
import Link from 'next/link';

const Header = () => {
    return (
        <section className='header_containt'>
            <div className="header_container">
                <h3>Hello, My Name Is</h3>
                <h1>Solaiman</h1>
                <h3>I AM Web Developer</h3>
                <p>From Dhaka, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at MERN Stack. I love to talk with you about your unique. </p>
                <Link className='header_button' href={'/contact'}>Contact</Link>
            </div>
            <div className="header_container header_expe">
                <Image src={user} alt='user'/>
                <div className="header_experience">
                <h6><span>2+</span> Years of
                Experience</h6>
            </div>
            <div className="header_experience_2">
                <h6><span>60+</span>Completed
                Projects</h6>
            </div>
            </div>
        </section>
    );
};

export default Header;