import { removeProduct } from "../../actions";
import { useDispatch } from "react-redux";
import { ProductInterface } from "../../reducers/productListReducer";
import { useMemo } from "react";

type Props = {
  product: ProductInterface;
};

export const Product = ({ product }: Props) => {
  const { discount, img, title, price, id } = product;
  const discountedPrice = useMemo(
    () => (discount ? price - price * (discount / 100) : price),
    [discount, price]
  );
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (window.confirm("Вы действительно хотите удалить эту услугу?")) {
      dispatch(removeProduct(id));
    }
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <button
        type="button"
        className="close position-absolute"
        style={{ right: "-2rem", top: "-3rem" }}
        aria-label="Close"
        onClick={handleRemove}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="discount-badge">
        {discount && <span className="badge badge-danger">{discount}%</span>}
      </div>
      <img
        src={
          img
            ? img
            : "https://cache3.youla.io/files/images/orig/5d/39/5d3985479e94ba18ba678a75.jpg"
        }
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <p className="card-price">
          {discount ? (
            <span>
              <span style={{ marginRight: "5px" }}>
                {discountedPrice.toFixed(2)} ₽
              </span>
              <span
                style={{
                  textDecoration: "line-through",
                  color: "gray",
                  fontSize: "1rem",
                }}
              >
                {price} ₽
              </span>
            </span>
          ) : (
            <span>{price} ₽</span>
          )}
        </p>
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};
