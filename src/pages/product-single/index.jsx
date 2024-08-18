import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import SingleUi from "../../components/single-ui";
import "./index.scss";
import { increment, decrement } from "../../slice/CounterSlice";

import "react-image-gallery/styles/css/image-gallery.css";

import { Col, Rate } from "antd";
import Stack from "@mui/material/Stack";
import {
  saveProduct,
  setLoading,
  setError,
} from "../../slice/ProductSingleSlice";

const index = () => {
  const [image, setImage] = useState();
  const images = [
    {
      original: image,
      thumbnail: image,
    },
    {
      original: image,
      thumbnail: image,
    },
    {
      original: image,
      thumbnail: image,
    },
  ];

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (store) => store.productSingle
  );
  const count = useSelector((state) => state.counter.value);

  useEffect(() => {
    async function fetchProduct() {
      dispatch(setLoading(true));
      let product = `https://headphones-server.onrender.com/products/${id}`;

      try {
        const response = await fetch(product);
        const products = await response.json();
        setImage(products.image_url);
        dispatch(saveProduct(products));
      } catch (error) {
        dispatch(setError(error.massage));
      } finally {
        dispatch(setLoading(false));
      }
    }
    fetchProduct();
  }, []);

  return (
    <>
      <div className="text-center">{loading && <p>Loading products...</p>}</div>
      <div className="container">
        <button
          className="mb-5 mt-[20px] px-3 py-1 border-solid border-[1.5px] border-black rounded-md"
          onClick={() => navigate(-1)}
        >
          « Back
        </button>
        <div className="mt-[20px]">
          <p className="text-[20px] my-[40px] font-[400]">
            Products / Gaming Headsets & Audio Products / Gaming Headsets &
            Audio /
            <span className="text-[20px] font-[500]">{product.name}</span>{" "}
          </p>
          <div className="flex pb-[100px] flex-col min-[950px]:flex-row justify-center items-center gap-[60px]">
            <div className="w-[500px]">
              <ImageGallery
                className="w-[350px]"
                showPlayButton={false}
                items={images}
              />
            </div>
            <div>
              <h2 className="pb-[16px] text-[48px] font-[400]">
                {product.name}
              </h2>
              <p className=" text-[18px] font-[500]">
                <span>{product.description}</span>
              </p>
              <div className="mt-[18px] flex items-center gap-1 pb-[28px] border-dashed border-gray-500 border-b-[2px]">
                <Rate
                  allowHalf
                  disabled
                  defaultValue={product?.ratings_stars}
                />
                <p className="py-2">
                  (
                  <span className="text-[18px] font-serif ">
                    {product.rating_counts}
                  </span>
                  )
                </p>
              </div>
              <div className="py-[28px] border-dashed border-gray-500 border-b-[2px]">
                <p className="text-[36px] font-[700]">
                  $<span className="">{product.price}</span> or 99.99/month
                </p>
                <p className="text-[18px] font-[500]">
                  Suggested payments with 6 month special financing
                </p>
              </div>
              <div className="py-[28px]  border-dashed border-gray-500 border-b-[2px]">
                <p className="text-[24px] font-[600] pb-[28px]">
                  Choose a color
                </p>
                <ul className="flex gap-2">
                  {product?.color_options?.map((color, index) => (
                    <li
                      key={index}
                      style={{ background: color }}
                      className="w-[40px] h-[40px] rounded-full border-[1px] border-solid border-black"
                    ></li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="py-[20px] flex justify-between">
                  <div className="flex items-center justify-between w-[200px] px-[30px] py-[13px] rounded-[25px] bg-gray-200 border-green-500 border-[4px] border-solid">
                    <button
                      className="h-[15px] w-[15px] flex items-center justify-center text-[32px] font-bold"
                      onClick={() => dispatch(decrement())}
                    >
                      -
                    </button>
                    <p className="text-[24px] font-semibold">{count}</p>
                    <button
                      className="h-[15px] w-[15px] flex items-center justify-center text-[32px] font-bold"
                      onClick={() => dispatch(increment())}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[18px] w-[157px] font-[600]">
                    Only <span className="text-green-500">16 items</span> left!
                    Don’t miss it
                  </p>
                </div>
                <div>
                  <button className="py-[16px] text-[18px] font-[700] text-white bg-green-700 rounded-lg w-full duration-100 hover:bg-green-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SingleUi />
      </div>
    </>
  );
};

export default index;
