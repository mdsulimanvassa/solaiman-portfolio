import Image from 'next/image';
import './Banner.css';
import solaiman from '../../../assets/solaiman-user.png'

const Banner = () => {
    return (
        <section className='banner'>
            <div className="banner_image">
                <Image src={solaiman} alt=''/>
            </div>
            <h1>SOLAIMAN</h1>
            <p>Web Developer (Full-Stack Developer)</p>
        </section>
    );
};

export default Banner;