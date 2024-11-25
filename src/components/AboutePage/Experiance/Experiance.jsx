import { FaLaptopCode } from 'react-icons/fa';
import './Experiance.css';

const Experiance = () => {
    return (
        <section className='experiance'>
            <div className="experiance_containt">
                <div className="experiance_logo">
                    <FaLaptopCode style={{fontSize:'45px', color:'#fbbf24'}}/>
                </div>
                <div className="experiance_row">
                    <h6>2024-Present</h6>
                    <h3>www.fiverr.com</h3>
                    <p>I am SOLAIMAN, I am a pixel-perfect web developer. I am experienced and an expert in the web development section and working since 2024. Full and fresh hand code is my power. Client satisfaction is my first priority. Work with me and be happy with the result.</p>
                </div>
            </div>
            <div className="experiance_containt">
                <div className="experiance_logo">
                    <FaLaptopCode style={{fontSize:'45px', color:'#fbbf24'}}/>
                </div>
                <div className="experiance_row">
                    <h6>2024-Present</h6>
                    <h3>kwork.com</h3>
                    <p>I am working on kwork as a Full-Stack Developer. SEO optimized, and also hand-coded. I work flexibly with clients to fulfill their design & development needs. Work with me and create a website that you are gonna be proud of. Use my work in your Business, Portfolio, Agency, Photography, eCommerce & much more.</p>
                </div>
            </div>
            <div className="experiance_containt">
                <div className="experiance_logo">
                    <FaLaptopCode style={{fontSize:'45px', color:'#fbbf24'}}/>
                </div>
                <div className="experiance_row">
                    <h6>2024-Present</h6>
                    <h3>Web Development Farm</h3>
                    <p>I am working on freelancing in socail market as MERN Stack Developer and Full-Stack Developer. My main freelancing is to create a MERN Stack Website, customization, and create based on client needs.</p>
                </div>
            </div>
        </section>
    );
};

export default Experiance;