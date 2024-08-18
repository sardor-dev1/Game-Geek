// MUI ------
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// ANT design
import { Collapse } from "antd";
import { Checkbox } from "antd";

// ------------------
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../slice/CartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Hero from "../../assets/hero.png";
import {
  saveBrands,
  setLoading as setBrandLoading,
  setError as setBrandError,
} from "../../slice/BrandSlice";

import {
  saveColors,
  setLoading as setColorLoading,
  setError as setColorError,
} from "../../slice/ColorSlice";

import { saveProducts, setLoading, setError } from "../../slice/productSlice";
import "./index.scss";

const index = () => {
  // Select
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sortBy, setSortBy] = useState("");
  const dispatch = useDispatch();
  const brands = useSelector((store) => store.brands);
  const colors = useSelector((store) => store.colors);
  const cart = useSelector((store) => store.cart);
  const { products, error, loading } = useSelector((store) => store.products);
  const navigate = useNavigate();

  const {
    loading: brandLoading,
    error: brandError,
    brands: brandsList,
  } = brands;

  const {
    loading: colorLoading,
    error: colorError,
    colors: colorsList,
  } = colors;

  const { Panel } = Collapse;

  function handleAdd(product) {
    dispatch(addItem(product));
  }

  useEffect(() => {
    async function fetchProducts() {
      dispatch(setLoading(true));

      let query = `https://headphones-server.onrender.com/products`;

      let params = [];

      if (selectedBrand) {
        params.push(`brand_name=${encodeURIComponent(selectedBrand)}`);
      }

      if (selectedColor) {
        params.push(`color_options_like=${encodeURIComponent(selectedColor)}`);
      }

      if (params.length > 0) {
        query += `?${params.join("&")}`;
      }

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

    async function fetchBrands() {
      dispatch(setBrandLoading(true));
      try {
        const response = await fetch(
          "https://headphones-server.onrender.com/brands"
        );
        if (!response.ok) {
          throw new Error("Error fetching brands");
        }
        const fetchBrands = await response.json();
        dispatch(saveBrands(fetchBrands));
      } catch (error) {
        dispatch(setBrandError(error.message));
      } finally {
        dispatch(setBrandLoading(false));
      }
    }

    async function fetchColors() {
      dispatch(setColorLoading(true));
      try {
        const response = await fetch(
          "https://headphones-server.onrender.com/colors"
        );

        if (!response.ok) {
          throw new Error("Error fetching colors");
        }

        const fetchedColors = await response.json();
        dispatch(saveColors(fetchedColors));
      } catch (error) {
        dispatch(setColorError(error.message));
      } finally {
        dispatch(setColorLoading(false));
      }
    }

    fetchProducts();
    fetchBrands();
    fetchColors();
  }, [dispatch, selectedBrand, selectedColor, sortBy]);

  const sortedProducts = [...products].sort((p1, p2) => {
    if (sortBy === "cheap") {
      return p1.price - p2.price;
    }
    if (sortBy === "expensive") {
      return p2.price - p1.price;
    }
    return 0;
  });

  return (
    <>
      {/* ---------- Hero ---------------- */}
      <section
        className="bg-no-repeat bg-cover mb-[30px] text-white"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="container">
          <div className="pt-[140px] pb-[200px]">
            <p className="text-[20px] font-[400]">/ Start / Categories</p>
            <p className="pb-[30px] text-[20px] font-[400]">
              / Headphones and audio for gaming
            </p>
            <h1 className="text-[46px] font-[400] w-full max-w-[550px]">
              HEADPHONES AND AUDIO FOR GAMING
            </h1>
          </div>
        </div>
      </section>
      {/*----------------- Product -------------------- */}
      <section className="flex  flex-col">
        <div className="bg-green-300 text-green-700">
          <div className="container">
            <div className="py-[35px] w-full flex justify-between items-center">
              <p className="text-[24px] font-[400]">Filter by:</p>
              <div className="py-[15px]">
                <div className="text-black rounded-sm">
                  <select
                    name="price"
                    className=" p-1 outline-none cursor-pointer text-green-500 text-[24px] font-[400] bg-transparent"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="">none</option>
                    <option value="cheap">cheap</option>
                    <option value="expensive">expensive</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-[100px] mt-[60px]">
          <div className="flex max-[630px]:flex-col">
            <div>
              <div className="w-[300px]">
                <Collapse
                  defaultActiveKey={["1"]}
                  onChange={(key) => console.log(key)}
                  bordered={false}
                >
                  <Panel
                    className="text-[18px] font-[400]"
                    header="BRAND"
                    key="1"
                  >
                    <div>
                      {brandLoading && <div>Colors Loading...</div>}
                      {brandError && (
                        <div className="text-red-500">Brands Error...</div>
                      )}
                      <ul className="flex flex-col gap-1">
                        {brandsList?.map((brand, index) => (
                          <li key={`${index}`}>
                            <Checkbox
                              name={"brand"}
                              id={brand}
                              onChange={() => setSelectedBrand(brand)}
                              checked={selectedBrand === brand}
                            >
                              {brand}
                            </Checkbox>
                          </li>
                        ))}
                      </ul>
                      <div className="w-full flex justify-center py-2">
                        <button
                          className="py-1 px-5 border-black border-[1.5px] rounded-md border-solid"
                          onClick={() => setSelectedBrand("")}
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </Panel>

                  <Panel
                    className="text-[18px] font-[400]"
                    header="CONNECTIVITY"
                    key="2"
                  >
                    <ul className="flex flex-col gap-20px text-[18px] font-[300]">
                      <li>
                        <Checkbox>2.4 GHz wireless technology</Checkbox>
                      </li>
                      <li>
                        <Checkbox>3.5mm audio input</Checkbox>
                      </li>
                      <li>
                        <Checkbox>Bluetooth</Checkbox>
                      </li>
                      <li>
                        <Checkbox>LIGHTSPEED wireless technology</Checkbox>
                      </li>
                      <li>
                        <Checkbox>Wired USB input</Checkbox>
                      </li>
                      <li>
                        <Checkbox>USB-C</Checkbox>
                      </li>
                    </ul>
                  </Panel>
                  <Panel
                    className="text-[18px] font-[400]"
                    header="SERIES"
                    key="3"
                  >
                    <ul className="flex flex-col gap-20px text-[18px] font-[300]">
                      <li>
                        <Checkbox>PRO</Checkbox>
                      </li>
                      <li>
                        <Checkbox>basic</Checkbox>
                      </li>
                      <li>
                        <Checkbox>Limited Edition</Checkbox>
                      </li>
                    </ul>
                  </Panel>
                  <Panel
                    className="text-[18px] font-[400]"
                    header="TECHNOLOGY"
                    key="4"
                  >
                    <ul className="flex flex-col gap-20px text-[18px] font-[300]">
                      <li>
                        <Checkbox>LIGHTSPEED</Checkbox>
                      </li>
                      <li>
                        <Checkbox>RGB LIGHTSYNC</Checkbox>
                      </li>
                      <li>
                        <Checkbox>DTS surround sound technology</Checkbox>
                      </li>
                      <li>
                        <Checkbox>BLUE V0!CE Mic Technology</Checkbox>
                      </li>
                      <li>
                        <Checkbox>DTS Headphone X 2.0</Checkbox>
                      </li>
                    </ul>
                  </Panel>
                  <Panel
                    className="text-[18px] font-[400]"
                    header="COLORS"
                    key="5"
                  >
                    {colorLoading && <div>Colors Loading...</div>}
                    {colorError && (
                      <div className="text-red-500">Colors Error...</div>
                    )}
                    <ul className="">
                      {colorsList.map((color, index) => {
                        return (
                          <li
                            key={index}
                            className="list-none float-start m-1 gap-[1rem]"
                          >
                            <button
                              onClick={() => setSelectedColor(color)}
                              className="border-solid h-[20px] w-[20px] border-[1px] border-black rounded-full bg-[#f5f5f5]"
                              style={{
                                backgroundColor: color,
                                outline:
                                  selectedColor === color
                                    ? "2px solid red"
                                    : "",
                              }}
                            ></button>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="flex w-full px-2 justify-center">
                      <button
                        className="py-1 px-4 border-[1.5px] rounded-md border-black border-solid"
                        onClick={() => setSelectedColor("")}
                      >
                        Reset
                      </button>
                    </div>
                  </Panel>
                  <Panel
                    className="text-[18px] font-[400]"
                    header="SORT BY"
                    key="6"
                  >
                    <ul className="flex flex-col gap-[20px]">
                      <li className="text-[14px] font-300">
                        <a>Best match</a>
                      </li>
                      <li className="text-[14px] font-300">
                        <a>New</a>
                      </li>
                      <li className="text-[14px] font-300">
                        <a>Name</a>
                      </li>
                      <li className="text-[14px] font-300">
                        <a>Price - From highest to lowest</a>
                      </li>
                      <li className="text-[14px] font-300">
                        <a>Price - From low to high</a>
                      </li>
                      <li className="text-[14px] font-300">
                        <a>Bestseller</a>
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </div>
            </div>

            <div className=" w-full">
              <div>
                {loading && <p>Loading products...</p>}
                <div className="pl-[40px] products grid justify-center grid-cols-3 justify-between max-[1230px]:grid-cols-1 max-[1280px]:grid-cols-2 gap-[40px]">
                  {sortedProducts.map((p) => (
                    <div
                      className="products__card w-full max-w-[350px]"
                      key={p.id}
                    >
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
                          <ul className="flex gap-2">
                            {p.color_options.map((color, index) => (
                              <li
                                key={index}
                                className="w-[20px] h-[20px] rounded-full border-[1px] border-solid border-black"
                                style={{ background: color }}
                              ></li>
                            ))}
                          </ul>
                          <p className="text-[22px] font-[600] font-mono">
                            ${p.price}
                          </p>
                        </div>
                        <div className="float-end">
                          <button
                            onClick={() => handleAdd(p)}
                            disabled={
                              Array.isArray(cart) &&
                              cart.find((item) => item.id === p.id) !==
                                undefined
                            }
                            className="products__card__btn"
                            style={{
                              backgroundColor:
                                Array.isArray(cart) &&
                                cart.find((item) => item.id === p.id)
                                  ? "grey-700"
                                  : "grey-500",
                              cursor:
                                Array.isArray(cart) &&
                                cart.find((item) => item.id === p.id)
                                  ? "not-allowed"
                                  : "pointer",
                              opacity:
                                Array.isArray(cart) &&
                                cart.find((item) => item.id === p.id)
                                  ? 0.6
                                  : 1,
                            }}
                          >
                            <AddShoppingCartIcon /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
