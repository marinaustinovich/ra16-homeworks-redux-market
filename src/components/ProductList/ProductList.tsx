import { useSelector } from "react-redux";
import { Product } from "../Product";
import { RootState } from "../../store";

export const ProductList = () => {
  const products = useSelector((state: RootState) => state.productList);

  return (
    <>
      <h2>Приглядитесь к этим предложениям</h2>
      <ul className="list-group">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};
