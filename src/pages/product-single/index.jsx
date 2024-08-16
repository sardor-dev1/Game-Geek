import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

import { Rate } from "antd";
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
            {/* <div className="flex flex-col justify-center items-center gap-[80px]">
              <div>
                <img src={product.image_url} alt={product.name} />
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-[80px] object-contain border-solid border-[1px] border-gray-200"
                  src={product.image_url}
                  alt={product.name}
                />
                <img
                  className="w-[80px] object-contain border-solid border-[1px] border-gray-200"
                  src={product.image_url}
                  alt={product.name}
                />
                <img
                  className="w-[80px] object-contain border-solid border-[1px] border-gray-200"
                  src={product.image_url}
                  alt={product.name}
                />
                <img
                  className="w-[80px] object-contain border-solid border-[1px] border-gray-200"
                  src={product.image_url}
                  alt={product.name}
                />
                <img
                  className="w-[80px] object-contain border-solid border-[1px] border-gray-200"
                  src={product.image_url}
                  alt={product.name}
                />
              </div>
            </div> */}
            <div className="w-[500px]">
              <ImageGallery showPlayButton={false} items={images} />
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
                <div className="py-[20px]">
                  <div className="flex items-center justify-between w-[200px] px-[30px] py-[13px] rounded-[25px] bg-gray-200 border-green-500 border-[4px] border-solid">
                    <button className="h-[15px] w-[15px] flex items-center justify-center text-[32px] font-bold">
                      -
                    </button>
                    <p className="text-[24px] font-semibold">5</p>
                    <button className="h-[15px] w-[15px] flex items-center justify-center text-[32px] font-bold">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
