import Image from 'next/image';
import './Testimonials.css';
import buyer from '../../../assets/buyer.webp';
import buyer2 from '../../../assets/buyer2.webp';
import buyer3 from '../../../assets/buyer3.webp';

const Testimonials = () => {
    return (
        <section className='testimonails'>
            <h1><i>TESTIMONIALS</i></h1>
            <h4>What my Clients are saying?</h4>
            <div className="testimonails_container">
                <div className="testimonials_row">
                    <div className="testimonials_image">
                        <Image src={buyer3} alt='testimonialImage' />
                    </div>
                    <h3>ProfessionalAgency</h3>
                    <p>He is a very nice guy to work with. Thanks a lot for helping and I will do more business with you.</p>
                    <h2>Designer</h2>
                </div>
                <div className="testimonials_row">
                    <div className="testimonials_image">
                        <Image src={buyer2} alt='testimonialImage' />
                    </div>
                    <h3>GlobalMarketer</h3>
                    <p>Great experience, highly recommend him. Worked through all my questions with me and was very timely in his responsiveness.</p>
                    <h2>Manager</h2>
                </div>
                <div className="testimonials_row">
                    <div className="testimonials_image">
                        <Image src={buyer} alt='testimonialImage' />
                    </div>
                    <h3>CreativeHunter</h3>
                    <p>Solaiman is always great to work with. He is extremely responsive and always returns his work in a timely manner, most of the time it is completed early! Great work quality as well. Thank you Solaiman!</p>
                    <h2>Manager</h2>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;