'use client';
import Image from 'next/image';
import './Contact.css';
import handsup from '../../../assets/austin-kehmeier-lyiKExA4zQA-unsplash.jpg'
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (event) => {
        window.location.reload();
    };
    return (
        <section className='contacts'>
            <h1><i>CONTACT</i>​</h1>
            <h3>Let,s Talk About Ideas​</h3>
            <div className="contacts_container">
                <div className="contacts_containt">
                    <div className="contacts_image">
                        <Image src={handsup} alt='handsup' />
                    </div>
                    <div className="conacts_text">
                        <h2>Solaiman</h2>
                        <h5>Web Developer (Full-Stack)</h5>
                        <p>Are You Looking For Your Business Online Presence?
                            I am here.Are You Looking For Your Business Online Presence?
                            I am here.</p>
                    </div>
                    <div className="conacts_row">
                        <FaLocationDot style={{ fontSize: '30px', color:'#fbbf24'}} />
                        <div className="">
                        <h2>Address</h2>
                        <h6>Trishal, Dhaka</h6>
                        </div>
                    </div>
                    <div className="conacts_row">
                        <FaUser style={{ fontSize: '30px', color:'#fbbf24'}} />
                        <div className="">
                        <h2>Freelance</h2>
                        <h6>Available Right Now</h6>
                        </div>
                    </div>
                    <div className="conacts_row">
                        <MdEmail style={{ fontSize: '30px', color:'#fbbf24'}} />
                        <div className="">
                        <h2>Email</h2>
                        <h6>mdsulimanvassa@gmail.com</h6>
                        </div>
                    </div>
                </div>
                <div className="contacts_containt">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="contacts_input">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id='name'
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                        </div>
                        <div className="contacts_input">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id='email'
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email address"
                                    }
                                })}
                            />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                        </div>
                        <div className="contacts_input">
                            <label htmlFor="message">Message</label>
                            <textarea
                                type="text"
                                name="message"
                                id='message'
                                {...register("message", { required: "Message is required" })}
                            />
                            {errors.message && <p style={{ color: 'red' }}>{errors.message.message}</p>}
                        </div>
                        <div className="contacts_Button">
                        <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;