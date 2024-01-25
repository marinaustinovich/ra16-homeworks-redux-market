import { Fragment } from "react";
import "./App.css";
import { AddProductForm, ProductList } from "./components";


function App() {
  return (
    <div className="App">
      <Fragment>
        <AddProductForm />
        <ProductList />
      </Fragment>
    </div>
  );
}

export default App;
