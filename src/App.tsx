import "./App.css";
import Carousel from "./components/carousel/Carousel";
import Faq from "./components/accordion/Faq"
import QuoteGenerator from "./components/quoteGenerator/QuoteGenerator";


function App() {
  return(
    <>
    <section className="hero">
      <h1>Practice Components</h1>
    </section>
    <Carousel />
    <Faq />
    <QuoteGenerator />
    </>
    )
}

export default App;
