import { About, Banner, Comments, Offers, Recommended, Register } from "./Components";
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
                <Register />
            </main>
            <Footer />
        </>
    );
}

export default App;
