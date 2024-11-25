'use client'
import Image from 'next/image';
import './MyServices.css';
import figma from '../../../assets/figma.jpg';
import coding from '../../../assets/coding.png';
import fullstack from '../../../assets/fullstack.jpg';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect } from 'react';

const MyServices = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            { threshold: 0.5 }
        );

        const items = document.querySelectorAll('.myservice_containt');
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);
    return (
        <section className='myservice_bg'>
            <h1><i>WHAT I DO</i></h1>
            <h6>My Services</h6>
            <div className="myservice_container">
                <div className="myservice_containt left-animation">
                    <div className="myservice_image">
                        <Image src={figma} alt='figma' />
                    </div>
                        <h2>DESIGN SKILLS</h2>
                        <p>Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.</p>
                        <Link href={'/contact'}>
                            Say Hello <span><FaArrowRight /></span></Link>
                </div>
                <div className="myservice_containt bottom-animation">
                    <div className="myservice_image">
                        <Image src={coding} alt='coding' />
                    </div>
                        <h2>FRONT-END DEVELOPER</h2>
                        <p>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
                        <Link href={'/contact'}>
                            Say Hello <span><FaArrowRight /></span></Link>
                </div>
                <div className="myservice_containt right-animation">
                    <div className="myservice_image">
                        <Image src={fullstack} alt='fullstack' />
                    </div>
                        <h2>MERN STACK DEVELOPER</h2>
                        <p>Passionate Mern Stack Developer with a track record of creating over 60+ websites. I find joy in crafting user-friendly, customizable sites.</p>
                        <Link href={'/contact'}>
                            Say Hello <span><FaArrowRight /></span></Link>
                </div>
            </div>
        </section>
    );
};

export default MyServices;