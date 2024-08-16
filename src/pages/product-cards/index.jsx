import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProducts, setLoading, setError } from "../../slice/productSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const index = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((store) => store.products);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      dispatch(setLoading(true));
      let query = `https://headphones-server.onrender.com/products`;
      try {
        const response = await fetch(query);
        const products = await response.json();
        dispatch(saveProducts(products));
      } catch (error) {
        dispatch(setError(error.massage));
      } finally {
        dispatch(setLoading(false));
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <section>
        {loading && <p>Loading products...</p>}
        <div className="pl-[40px] products grid grid-cols-3 justify-between gap-[40px]">
          {products.map((p) => (
            <div className="products__card w-full max-w-[350px]" key={p.id}>
              <div className="h-[300px] p-[20px]">
                <img
                  className="w-full h-full object-contain"
                  src={p.image_url}
                  alt={p.name}
                />
              </div>
              <div className="p-[15px] flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => navigate(`product/${p.id}`)}
                    className="cursor-pointer pb-[13px] text-[20px] font-semibold"
                  >
                    {p.brand_name}
                  </h3>
                  <p className="text-[18px] pb-[20px] font-[300]">
                    {p.description}
                  </p>
                  <p className="text-[22px] font-[600] font-mono">${p.price}</p>
                </div>
                <div className="float-end">
                  <button className="products__card__btn">
                    <AddShoppingCartIcon /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default index;
