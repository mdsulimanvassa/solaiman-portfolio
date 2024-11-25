'use client';
import Image from 'next/image';
import './Protfolio.css';
import Link from 'next/link';
import portfolio1 from '../../../assets/portfolio1.png';
import portfolio2 from '../../../assets/portfolio2.png';
import portfolio3 from '../../../assets/portfolio3.png';
import portfolio4 from '../../../assets/portfolio4.png';
import portfolio5 from '../../../assets/portfolio5.jpg';
import portfolio6 from '../../../assets/portfolio6.jpg';
import portfolio7 from '../../../assets/portfolio7.png';
import { FaArrowRight } from 'react-icons/fa';

const Protfolio = () => {
    return (
        <section className='portfolio_section'>
            <h2><i>PORTFOLIO</i></h2>
            <p>MY Cases</p>
            <div className="portfolio_scroll_wrapper">
                <div className="portfolio_scroll">
                    <div className="protfolio_container item1">
                        <div className="protfolio_image">
                            <Image src={portfolio1} alt='protfolio' />
                        </div>
                        <h3>REACT JS</h3>
                        <h1>Fron_end Development</h1>
                        <Link href={'/'}>See Project <span><FaArrowRight /></span></Link>
                    </div>
                    <div className="protfolio_container item2">
                        <div className="protfolio_image">
                            <Image src={portfolio2} alt='protfolio' />
                        </div>
                        <h3>NEXT JS</h3>
                        <h1>Fron_end Development</h1>
                        <Link href={'/'}>See Project <span><FaArrowRight /></span></Link>
                    </div>
                    <div className="protfolio_container item3">
                        <div className="protfolio_image">
                            <Image src={portfolio3} alt='protfolio' />
                        </div>
                        <h3>REACT JS</h3>
                        <h1>Fron_end Development</h1>
                        <Link href={'/'}>See Project <span><FaArrowRight /></span></Link>
                    </div>
                    <div className="protfolio_container item4">
                        <div className="protfolio_image">
                            <Image src={portfolio4} alt='protfolio' />
                        </div>
                        <h3>NEXT JS</h3>
                        <h1>Fron_end Development</h1>
                        <Link href={'/'}>See Project <span><FaArrowRight /></span></Link>
                    </div>
                    <div className="protfolio_container item5">
                        <div className="protfolio_image">
                            <Image src={portfolio5} alt='protfolio' />
                        </div>
                        <h3>REACT JS</h3>
                        <h1>Fron_end Development</h1>
                        <Link href={'/'}>See Project <span><FaArrowRight /></span></Link>
                    </div>
                    <div className="protfolio_container item6">
                        <div className="protfolio_image">
                            <Image src={portfolio6} alt='protfolio' />
                        </div>
                        <h3>NEXT JS</h3>
                        <h1>Fron_end Development</h1>
                        <Link href={'/'}>See Project <span><FaArrowRight /></span></Link>
                    </div>
                    <div className="protfolio_container item7">
                        <div className="protfolio_image">
                            <Image src={portfolio7} alt='protfolio' />
                        </div>
                        <h3>REACT JS</h3>
                        <h1>Full-stack Development</h1>
                        <Link href={'/'}>See Project <span><FaArrowRight /></span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Protfolio;