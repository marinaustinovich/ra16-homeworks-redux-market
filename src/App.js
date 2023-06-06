import { Fragment } from 'react';
import './App.css';
import AddProductForm from './components/AddProductForm/AddProductForm';
import ProductList from './components/ProductList/ProductList';

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
