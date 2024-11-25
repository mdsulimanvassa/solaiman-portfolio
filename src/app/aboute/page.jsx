import Aboute from "@/components/AboutePage/Aboute/Aboute";
import Banner from "@/components/AboutePage/Banner/Banner";
import Education from "@/components/AboutePage/Education/Education";
import Experiance from "@/components/AboutePage/Experiance/Experiance";
import Contact from "@/components/Shared/Contact/Contact";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const AboutePage = () => {
    return (
        <>
            <Navbar />
            <Banner></Banner>
            <Aboute></Aboute>
            <Education></Education>
            <Experiance></Experiance>
            <Contact></Contact>
            <Footer />
        </>
    );
};

export default AboutePage;