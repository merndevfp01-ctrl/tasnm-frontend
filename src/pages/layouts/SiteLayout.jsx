import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";

export default function SiteLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}