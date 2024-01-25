import { useDispatch, useSelector } from "react-redux";
import { changeField, addProduct, resetFields } from "../../actions";
import { RootState } from "../../store";

export const AddProductForm = () => {
  const { id, img, title, price, discount } = useSelector(
    (state: RootState) => state.productAdd
  );
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addProduct({
        id,
        img,
        title,
        price: price.toString(),
        discount: discount?.toString(),
      })
    );
    dispatch(resetFields());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(changeField(name, value));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label htmlFor="imgInput">Image URL</label>
        <input
          type="text"
          className="form-control"
          id="imgInput"
          name="img"
          value={img}
          onChange={handleChange}
          placeholder="https://example.com/"
        />
      </div>
      <div className="form-group">
        <label htmlFor="titleInput">Title</label>
        <input
          type="text"
          className="form-control"
          id="titleInput"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priceInput">Price</label>
        <input
          type="number"
          className="form-control"
          id="priceInput"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="discountInput">Discount</label>
        <input
          type="number"
          className="form-control"
          id="discountInput"
          name="discount"
          value={discount}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
};
