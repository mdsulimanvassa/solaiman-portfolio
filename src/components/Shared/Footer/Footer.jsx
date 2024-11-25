import Link from 'next/link';
import './Footer.css';
import Image from 'next/image';
import images1 from '../../../assets/facebook.png';
import images2 from '../../../assets/github.png';
import images3 from '../../../assets/twitter.png';

const Footer = () => {
    const currentDate = new Date();
    const fullYear = currentDate.getFullYear();
    return (
        <footer>
            <div className='footer_bg'>
            </div>
            <div className="footer_imgs">
            </div>
            <div className="footer_text">
                <div className="footer_all">
                    <div className="footer_containt">
                        <div className="text-center">
                            <ul className='footer_link'>
                                <li><Link href={'/home'} className=''>Home</Link></li>
                                <li><Link href={'/aboute'} className=''>Aboute Me</Link></li>
                                <li><Link href={'/contact'} className=''>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer_img">
                            <Link href={'https://www.facebook.com/SolaimanV'} target='-blank'><Image src={images1} height={50} width={50} alt='image1' /></Link>
                            <Link href={'https://x.com/MdVassa11946'} target='-blank'><Image src={images3} height={50} width={50} alt='image3' /></Link>
                            <Link href={'https://github.com/mdsulimanvassa'} target='-blank'><Image style={{ borderRadius: '60px' }} src={images2} height={50} width={50} alt='image2' /></Link>
                        </div>
                    </div>
                    <div style={{ padding: '0px 20px' }}> <hr style={{ border: '1px dotted #fff', margin: '20px 0' }} /></div>
                    <div className="footer_list">
                        <div className="footer_footer">
                            <p>@{fullYear} All Rights Reserved</p>
                        </div>
                        <div className="footer_footer">
                            <Link href={'/'}><h1 style={{ fontSize: "25px", marginTop: '-8px' }}>Solai<span style={{ color: "#2680EE" }}>m</span>an</h1></Link>
                        </div>
                        <div className="footer_footer">
                            <p>Privacy Policy ! Terms Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;