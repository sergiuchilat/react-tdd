import './App.css';
import Filters from "components/Filters"
import ProductsPage from "./components/Products"
import {useEffect, useState} from "react"
import ProductsAPI from "./services/api/ProductsAPI"

function App() {
  const initialFilters = {
    name: '',
    priceFrom: 5,
    priceTo: 1000,
  }
  const [filterURL, setFilterURL] = useState(`?priceFrom=${initialFilters.priceFrom}&priceTo=${initialFilters.priceTo}`);
  const [products, setProducts] = useState([]);
  
  const handleApplyFilters = (value) => {
    setFilterURL(value);
  }
  
  const getProducts = async () => {
    const response = await (new ProductsAPI().get(filterURL));
    setProducts(response);
  }
  
  useEffect( () => {
    console.log(filterURL)
    getProducts();
  }, [filterURL]);
  
  return (
    <div className="App">
      <aside>
        <Filters
          filterName={''}
          filterPriceFrom={initialFilters.priceFrom}
          filterPriceTo={initialFilters.priceTo}
          applyFilters={(value) => {handleApplyFilters(value)}}
        />
      </aside>
      <main>
        <div>
          Filters URL = <code> { filterURL }</code>
        </div>
        <hr/>
        <ProductsPage products={products}/>
      </main>
    </div>
  );
}

export default App;
