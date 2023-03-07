import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { products } from "./products";

function App() {
  console.log(products);
  return (
    <div className="App">
      <Header />
      <Main products={products} />
      <Footer />
    </div>
  );
}

export default App;
