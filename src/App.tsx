import "./App.css";
import Carousel from "./components/carousel/Carousel";
import Faq from "./components/accordion/Faq"
import QuoteGenerator from "./components/quoteGenerator/QuoteGenerator";
import ShoppingList from "./components/shoppingList/ShoppingList";


function App() {
  return(
    <>
    <section className="hero">
      <h1>Practice Components</h1>
    </section>
    <Carousel />
    <Faq />
    <QuoteGenerator />
    <ShoppingList />
    </>
    )
}

export default App;
