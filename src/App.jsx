import { About, Banner, Comments, Contact, Offers, Recommended, Register } from "./Components";
import { Footer } from "./Layout";

function App() {
    return (
        <>
            <main className="main">
                <Banner />
                <Offers />
                <About />
                <Recommended />
                <Comments />
                <Contact />
                <Register />
            </main>
            <Footer />
        </>
    );
}

export default App;
