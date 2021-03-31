import Navbar from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";
import loader from "./loader.svg";
import Section from "./components/Section";

import { Container } from "react-bootstrap";

function App() {
    window.title = "Test Indicator";
    const lorem =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci, necessitatibus et voluptatem nulla distinctio. Incidunt delectus a modi voluptatem, quidem sunt similique. Nobis beatae ea aut repellendus officia consequuntur.";
    const { data, error, loading } = useFetch("/tests");

    return (
        <div className="App">
            <Navbar />
            <Container className="mt-4">
                {error && <h2>{error}</h2>}
                {loading && <img src={loader} alt="loader" className="animate-spin" width="100" />}
                {!loading && (
                    <div>
                        <Header />
                        <Main tests={data} />
                        <Section title="Sub-heading 2" body={lorem} />
                        <Footer />
                    </div>
                )}
            </Container>
        </div>
    );
}

export default App;
