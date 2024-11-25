import { FaUserClock, FaUserGraduate } from 'react-icons/fa';
import { AiTwotoneMail } from "react-icons/ai";
import './Contact.css';

const Contact = () => {
    return (
        <section className='contact'>
           <div className="contact_bg">
           <h1><i>CONTACT</i>​</h1>
            <p>Are You Looking For Your Business Online Presence? I am here. </p>
            <div className="contact_container">
                <div className="contact_containt"> 
                    <FaUserGraduate style={{ margin: '10px auto', fontSize:'30px', color:'#fbbf24' }} />
                    <h2>Solaiman</h2>
                    <h6>Web Developer (Full-Stack Developer)</h6>
                </div>
                <div className="contact_containt">
                    <FaUserClock style={{ margin: '10px auto', fontSize:'30px', color:'#fbbf24' }} />
                    <h2>Fiverr</h2>
                    <h6>Available Right Now</h6>
                </div>
                <div className="contact_containt">
                    <AiTwotoneMail style={{ margin: '10px auto', fontSize:'30px', color:'#fbbf24' }} />
                    <h2>Email</h2>
                    <h6>mdsulimanvassa@gmail.com</h6>
                </div>
            </div>
           </div>
        </section >
    );
};

export default Contact;