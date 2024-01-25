import { nanoid } from "nanoid";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions";

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: ProductInterface;
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  payload: { id: string };
}

type ProductListActions = AddProductAction | RemoveProductAction;

export interface ProductInterface {
  id: string;
  title: string;
  price: number;
  img: string;
  discount: number | null;
}

const initialState: ProductInterface[] = [
  {
    id: nanoid(),
    title: "Электрическая зубная щётка",
    price: 21000,
    img: "https://png.pngtree.com/png-vector/20210205/ourmid/pngtree-rhino-modeling-electric-toothbrush-png-image_2873955.jpg",
    discount: null,
  },
  {
    id: nanoid(),
    title: "Настольная игра",
    price: 25000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutTvvsSg5Bu299BigfRCXmYmJD1ABuJBIwdnVWgS3O27wHzGdJnG7SAhunbev6aXwTRo&usqp=CAU",
    discount: 15,
  },
];

export default function productListReducer(
  state: ProductInterface[] = initialState,
  action: ProductListActions
): ProductInterface[] {
  switch (action.type) {
    case ADD_PRODUCT:
      const { title, price, img, discount } = action.payload;
      return [...state, { id: nanoid(), title, img, discount, price }];
    case REMOVE_PRODUCT:
      const { id } = action.payload;
      return state.filter((product) => product.id !== id);
    default:
      return state;
  }
}
