import AppBar from "./components/AppBar"
import FilterSort from "./components/FilterSort"
import Product from "./components/Product"

const App = () => {
  return (
    <div>
      <AppBar/>
      <FilterSort />
      <Product/>
    </div>
  )
}

export default App