import Header from "@/components/HomePage/Header/Header";
import MyServices from "@/components/HomePage/MyServices/MyServices";
import Protfolio from "@/components/HomePage/Protfolio/Protfolio";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
import Contact from "@/components/Shared/Contact/Contact";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Header></Header>
            <MyServices></MyServices>
            <Protfolio></Protfolio>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer />
        </>
    );
};

export default HomePage;