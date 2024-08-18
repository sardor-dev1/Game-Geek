import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { removeItem, removeAll } from "../../slice/CartSlice";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { NotFound } from "@pages";
import CartModal from "../../components/cart-modal";
import RemoveAll from "../../components/remove-all-cart";
import { useState, useEffect } from "react";

const Index = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [allOpen, setAllOpen] = useState(false);
  const handleAllClose = () => setAllOpen(false);
  const [id, setId] = useState();
  const navigate = useNavigate();
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = cart.reduce((acc, item) => {
      const storedQuantity = localStorage.getItem(`quantity-${item.id}`);
      acc[item.id] = storedQuantity ? Number(storedQuantity) : 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cart]);

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => {
      const newQuantity = prev[id] + delta;
      if (newQuantity < 1) return prev;
      localStorage.setItem(`quantity-${id}`, newQuantity);
      return { ...prev, [id]: newQuantity };
    });
  };

  const handleDeleteItem = (id) => {
    handleClose(true);
    dispatch(removeItem(id));
    localStorage.removeItem(`quantity-${id}`);
  };

  const handleRemoveAll = () => {
    setAllOpen(true);
    localStorage.clear();
  };

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * quantities[item.id],
      0
    );
    localStorage.setItem("totalPrice", total.toFixed(2));
    return total.toFixed(2);
  };

  return (
    <>
      <div className="container">
        <div className="relative pt-[60px]">
          <CartModal open={open} id={id} handleClose={handleClose} />
          <RemoveAll allOpen={allOpen} handleAllClose={handleAllClose} />
          <div>
            <button
              className="text-[18px] mb-[30px] font-[600]"
              onClick={() => navigate("/")}
            >
              ← Back to Home
            </button>
            <h2 className="font-[400] mb-[40px] text-[32px]">SHOPPING CART</h2>
          </div>
          <div className="grid grid-cols-7">
            <div className=" col-span-5  border-solid border-r-[2px] border-gray-200 pr-[25px]">
              <div className="flex justify-between items-center py-[12px] border-dashed border-gray-300 border-y-[2px]">
                <p className="font-[400] text-[24px]">Product</p>
                <div className="flex items-center gap-[450px]">
                  <p className="font-[400] text-[24px]">Quantity</p>
                  <p className="font-[400] text-[24px]">Price</p>
                </div>
              </div>
              <div className="cart pt-3 flex flex-col gap-[30px]">
                {cart.length === 0 ? (
                  <NotFound />
                ) : (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="border-dashed border-b-[2px] border-gray-300 py-[35px]"
                    >
                      <div className="relative gap-5 cart__card w-full text-black flex justify-between">
                        <button
                          className="absolute top-0 duration-3 transition hover:scale-[1.2] left-0"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          <Tooltip title="Delete">
                            <RemoveShoppingCartIcon />
                          </Tooltip>
                        </button>
                        <div className="flex gap-[35px] ml-[50px]">
                          <div className="border-solid border-[2px] border-gray-300 py-1 w-[150px]">
                            <img
                              className="object-contain w-full"
                              src={item.image_url}
                              alt={item.name}
                            />
                          </div>
                          <div className="flex flex-col justify-between">
                            <div>
                              <h3 className="text-[28px]">{item.brand_name}</h3>
                              <h4 className="text-[18px] font-[400]">
                                {item.name}
                              </h4>
                            </div>
                            <div>
                              <ul className="flex gap-3">
                                {item.color_options.map((color, index) => (
                                  <li
                                    key={index}
                                    className="w-[20px] h-[20px] rounded-full border-[1px] border-solid border-black"
                                    style={{ background: color }}
                                  ></li>
                                ))}
                              </ul>
                              <p className="text-[18px] pt-1 font-[400] text-green-400">
                                In stock
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-[30%] justify-between items-start ">
                          <div className="flex gap-5 bg-gray-200 rounded-xl">
                            <button
                              className="p-2 text-[28px] font-semibold"
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              -
                            </button>
                            <p className="p-2 text-[28px] font-semibold">
                              {quantities[item.id]}
                            </p>
                            <button
                              className="p-2 text-[28px] font-semibold"
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              +
                            </button>
                          </div>
                          <div>
                            <p className="font-[700] text-[24px]">
                              {(item.price * quantities[item.id]).toFixed(2)}
                              <span className="text-orange-500">$</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div>
                {cart.length > 0 ? (
                  <div className="flex justify-center pt-5 mb-[50px]">
                    <Button
                      onClick={handleRemoveAll}
                      variant="contained"
                      color="success"
                    >
                      Remove all
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="grid pl-[25px] col-span-2">
              <div className="">
                <h2 className="text-[32px] font-[400] border-dashed border-gray-300 py-[7px] border-b-[2px]">
                  CART TOTALS
                </h2>
                <div className="flex pt-[30px] pb-[20px] justify-between items-end">
                  <p className="text-[18px] font-[300]">
                    Shipping (3-5 Business Days)
                  </p>
                  <p className="text-[18px] font-[500]">Free</p>
                </div>
                <div className="flex py-[20px] justify-between items-end">
                  <p className="text-[18px] font-[300]">
                    TAX (estimated for the United States (US))
                  </p>
                  <p className="text-[18px] font-[500]">$0</p>
                </div>
                <div className="flex pt-[20px] pb-[45px] justify-between items-end border-dashed border-b-[2px] ">
                  <p className="text-[18px] font-[300]">Subtotal</p>
                  <p className="text-[18px] font-[500]">$399.00</p>
                </div>
                <div className="flex pt-[20px] pb-[45px] justify-between">
                  <p className="text-[18px] font-[300]">Total</p>
                  <p className="text-[18px] font-[500]">${calculateTotal()}</p>
                </div>
                <div>
                  <button className="py-[16px] text-[18px] font-[700] text-white bg-green-700 rounded-lg w-full duration-100 hover:bg-green-800">
                    Proceed to Checkout
                  </button>
                </div>
                <div className="flex items-center justify-center pt-[40px]">
                  <button
                    className="text-[18px] mb-[30px] font-[600]"
                    onClick={() => navigate("/")}
                  >
                    ← Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10 flex flex-col gap-[28px]">
            <p className="text-[18px] font-[300]">
              Have a coupon/promotional code? Enter your code
            </p>
            <div className="flex items-center gap-[30px]">
              <input
                type="text"
                placeholder="Enter code"
                className="border-b-[2px] w-[300px] border-gray-300 px-3 py-2"
              />
              <button className="py-[9px] px-[25px] rounded-xl text-[18px] font-[700] text-green-600 border-green-600 border-solid border-[2px] hover:border-green-700 hover:text-green-700">
                Apply Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
