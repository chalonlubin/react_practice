import "./App.css";
import Carousel from "./components/carousel/Carousel";
import Faq from "./components/accordion/Faq"
import QuoteGenerator from "./components/quoteGenerator/QuoteGenerator";
import ShoppingList from "./components/shoppingList/ShoppingList";
import GitSearch from "./components/gitSearch/GitSearch";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";


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
    <GitSearch />
    <VideoPlayer />
    </>
    )
}

export default App;
