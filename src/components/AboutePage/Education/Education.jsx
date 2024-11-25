import './Education.css';
import { MdGolfCourse } from "react-icons/md";
import { PiCertificateThin } from "react-icons/pi";

const Education = () => {
    return (
        <section className='education'>
            <div className="education_containt">
                <div className="education_education">
                    <h2>EDUCATION</h2>
                    <div className="education_container">
                        <PiCertificateThin style={{fontSize:'35px', color:'#fbbf24'}} />
                        <h5>2017</h5>
                        <h1>PSC Certificate</h1>
                    </div>
                    <div className="education_container">
                        <PiCertificateThin style={{fontSize:'35px', color:'#fbbf24'}} />
                        <h5>2020</h5>
                        <h1>JSC Certificate</h1>
                    </div>
                    <div className="education_container">
                        <PiCertificateThin style={{fontSize:'35px', color:'#fbbf24'}} />
                        <h5>2022-2023</h5>
                        <h1>SSC Certificate</h1>
                    </div>
                    <div className="education_container">
                        <PiCertificateThin style={{fontSize:'35px', color:'#fbbf24'}} />
                        <h5>2023-2024</h5>
                        <h1>HSC Certificate</h1>
                    </div>
                    <div className="education_container">
                        <MdGolfCourse style={{fontSize:'35px', color:'#fbbf24'}} />
                        <h5>2023-2024</h5>
                        <h1>Programming Hero Web Development Course Complete</h1>
                    </div>
                </div>
                <div className="education_education">
                    <h2>SKILLS</h2>
                    <div className="technical-bars">
                        <div className="bar">
                            <div className="info">
                                <span>HTML & CSS</span>
                            </div>
                            <div className="progrees-line html">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>JavaScript</span>
                            </div>
                            <div className="progrees-line javascript">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>TypeScript</span>
                            </div>
                            <div className="progrees-line typescript">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>Next JS</span>
                            </div>
                            <div className="progrees-line python">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>React JS</span>
                            </div>
                            <div className="progrees-line react">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>Node JS</span>
                            </div>
                            <div className="progrees-line node">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>Express JS</span>
                            </div>
                            <div className="progrees-line express">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;