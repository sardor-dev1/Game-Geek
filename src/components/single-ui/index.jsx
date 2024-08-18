import React from "react";
import { Collapse } from "antd";
import Resource from "../../assets/product-single/resource.png";
import Headset from "../../assets/product-single/headset.png";
import Cloud from "../../assets/product-single/cloud.png";
import HDMI from "../../assets/product-single/hdmi.png";
import Series1 from "../../assets/product-single/series1.png";
import Series2 from "../../assets/product-single/series2.png";
import Series3 from "../../assets/product-single/series3.png";
import Stars from "../../assets/product-single/stars.jpg";
import Rating from "../../assets/product-single/rating.png";
import Game from "../../assets/product-single/game.png";
import Video from "../../assets/product-single/video.png"

import Tabs from "../tabs";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "Specification and details",
    children: <p>{text}</p>,
  },
];
const index = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <section className="container">
        <div className="border-dashed border-gray-300 mb-[50px] border-y-[2px]">
          <Collapse
            bordered={false}
            items={items}
            defaultActiveKey={["1"]}
            onChange={onChange}
          />
        </div>
      </section>
      <section className="bg-[#0D2612] text-white text-center">
        <div className="container">
          <div className="w-full max-w-[680px] mx-auto">
            <h2 className="text-[48px] font-[500] pt-[120px] pb-[20px]">
              MADE TO PLAY
            </h2>
            <p className="pb-[30px]">
              The A50 X connects you to all your game libraries from each of
              your systems, with the push of a button. With unprecedented
              advances in connectivity, audio and wireless fidelity, A50 X plays
              at peak performance no matter what, how and where you want to
              play.
            </p>
          </div>
          <div className="grid grid-cols-4 pb-[120px] justify-between">
            <div className="flex flex-col justify-between w-full max-w-[260px] items-center">
              <img src={Resource} alt="" />
              <div>
                <h3>PLAYSYNC 3-SYSTEM SWITCHING</h3>
                <p>XBOX + PS5 + PC ALL AT ONCE</p>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full max-w-[260px] items-center">
              <img src={Headset} alt="" />
              <div>
                <h3>PRO-G GRAPHENE AUDIO TRANSDUCERS</h3>
                <p>INNOVATIVE PRECISION AND CLARITY</p>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full max-w-[260px] items-center">
              <img src={Cloud} alt="" />
              <div>
                <h3>PROFESSIONAL LIGHTSPEED wireless technology</h3>
                <p>PLUS BLUETOOTH ® MIX FOR TWO</p>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full max-w-[260px] items-center">
              <img src={HDMI} alt="" />
              <div>
                <h3>HDMI 2.14K 120HZ</h3>
                <p>SUPERIOR 24-BIT AUDIO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container bg-[#E1F7E5]">
          <div className="w-full pb-[36px] pt-[70px] max-w-[700px] text-center mx-auto">
            <h2 className="text-[48px] pb-[23px] font-[500]">ASTRO SERIES</h2>
            <p className="text-[18px] font-[400]">
              A family united by the love of the game, the ASTRO series has the
              perfect fit for the perfect game.
            </p>
          </div>
          <div className="flex justify-evenly pb-[40px]">
            <div className="w-full max-w-[254px] flex flex-col items-center text-center">
              <img src={Series1} alt="" />
              <div>
                <h2 className="text-[24px] font-[700] ">A30</h2>
                <p className="text-[16px] font-[400] text-[#0D2612]">
                  LIGHTSPEED wireless gaming headset with microphone for Xbox,
                  PlayStation, PC/MAC and mobile devices
                </p>
                <button className="py-[12px] px-[18px] text-[18px] font-[700] bg-green-600 rounded-lg text-white hover:bg-green-800 duration-100">
                  Explore More ›
                </button>
              </div>
            </div>
            <div className="w-full max-w-[254px] flex flex-col items-center text-center">
              <img src={Series2} alt="" />
              <div>
                <h2 className="text-[24px] font-[700] ">
                  A30-THE MANDALORIAN EDITION™
                </h2>
                <p className="text-[16px] font-[400] text-[#0D2612]">
                  LIGHTSPEED wireless gaming headset with microphone for Xbox,
                  PlayStation, PC/MAC and mobile devices
                </p>
                <button className="py-[12px] px-[18px] text-[18px] font-[700] bg-green-600 rounded-lg text-white hover:bg-green-800 duration-100">
                  Explore More ›
                </button>
              </div>
            </div>
            <div className="w-full max-w-[254px] flex flex-col items-center text-center">
              <img src={Series3} alt="" />
              <div>
                <h2 className="text-[24px] font-[700] ">a10</h2>
                <p className="text-[16px] font-[400] text-[#0D2612]">
                  Wired gaming headset for Xbox Series X|S, PlayStation 5,
                  Switch, PC/MAC, etc.
                </p>
                <button className="py-[12px] px-[18px] text-[18px] font-[700] bg-green-600 rounded-lg text-white hover:bg-green-800 duration-100">
                  Explore More ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="pl-[100px] pb-[50px]">
          <h2 className="text-[48px] font-[500] py-[70px]">Reviews</h2>
          <div className="flex gap-[32px] pb-[70px]">
            <div>
              <h3 className="text-[64px] text-center font-[500]">4.3</h3>
              <div className="flex pt-[10px] pb-[20px]">
                <img src={Rating} alt="" />
                <p>(121)</p>
              </div>
              <p>30 Ratings</p>
            </div>
            <div>
              <img src={Stars} alt="" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="border-solid border-[2px] w-full max-w-[410px] rounded-[15px] p-[28px] border-[#F4F4F4]">
              <div className="flex items-center gap-1">
                <img src={Rating} alt="" />
                <p>4.0</p>
              </div>
              <h3 className="pt-[20px] text-[24px] font-[500]">
                FULL SATISFACTION
              </h3>
              <div className="flex justify-between items-center">
                <h4 className="text-[18px] font-[500]">Maria Martines</h4>
                <p className="text-[18px] font-[700] text-green-500">
                  2 month ago
                </p>
              </div>
              <p>I’m very satisfied with this product.</p>
              <p className="text-[18px] font-[700] pt-[20px]">Helpful?</p>
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <button className="py-[9px] px-[35px] rounded-lg bg-[#0D2612] text-[18px] font-[700] text-white border-solid border-[3px] border-[#0D2612] hover:bg-white hover:text-[#0D2612] duration-100">
                    Yes
                  </button>
                  <button className="py-[9px] px-[35px] rounded-lg bg-white text-[18px] font-[700] text-[#0D2612] border-solid border-[3px] border-[#0D2612] hover:bg-[#0D2612] hover:text-white duration-100">
                    Yes
                  </button>
                </div>
                <a className="text-[18px] font-[600] border-solid border-b-[2px] border-black">
                  Report
                </a>
              </div>
            </div>
            <div className="border-solid border-[2px] w-full max-w-[410px] rounded-[15px] p-[28px] border-[#F4F4F4]">
              <div className="flex items-center gap-1">
                <img src={Rating} alt="" />
                <p>4.0</p>
              </div>
              <h3 className="pt-[20px] text-[24px] font-[500]">
                FULL SATISFACTION
              </h3>
              <div className="flex justify-between items-center">
                <h4 className="text-[18px] font-[500]">Maria Martines</h4>
                <p className="text-[18px] font-[700] text-green-500">
                  2 month ago
                </p>
              </div>
              <p>I’m very satisfied with this product.</p>
              <p className="text-[18px] font-[700] pt-[20px]">Helpful?</p>
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <button className="py-[9px] px-[35px] rounded-lg bg-[#0D2612] text-[18px] font-[700] text-white border-solid border-[3px] border-[#0D2612] hover:bg-white hover:text-[#0D2612] duration-100">
                    Yes
                  </button>
                  <button className="py-[9px] px-[35px] rounded-lg bg-white text-[18px] font-[700] text-[#0D2612] border-solid border-[3px] border-[#0D2612] hover:bg-[#0D2612] hover:text-white duration-100">
                    Yes
                  </button>
                </div>
                <a className="text-[18px] font-[600] border-solid border-b-[2px] border-black">
                  Report
                </a>
              </div>
            </div>
            <div className="border-solid border-[2px] w-full max-w-[410px] rounded-[15px] p-[28px] border-[#F4F4F4]">
              <div className="flex items-center gap-1">
                <img src={Rating} alt="" />
                <p>4.0</p>
              </div>
              <h3 className="pt-[20px] text-[24px] font-[500]">
                FULL SATISFACTION
              </h3>
              <div className="flex justify-between items-center">
                <h4 className="text-[18px] font-[500]">Maria Martines</h4>
                <p className="text-[18px] font-[700] text-green-500">
                  2 month ago
                </p>
              </div>
              <p>I’m very satisfied with this product.</p>
              <p className="text-[18px] font-[700] pt-[20px]">Helpful?</p>
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <button className="py-[9px] px-[35px] rounded-lg bg-[#0D2612] text-[18px] font-[700] text-white border-solid border-[3px] border-[#0D2612] hover:bg-white hover:text-[#0D2612] duration-100">
                    Yes
                  </button>
                  <button className="py-[9px] px-[35px] rounded-lg bg-white text-[18px] font-[700] text-[#0D2612] border-solid border-[3px] border-[#0D2612] hover:bg-[#0D2612] hover:text-white duration-100">
                    Yes
                  </button>
                </div>
                <a className="text-[18px] font-[600] border-solid border-b-[2px] border-black">
                  Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Tabs />
      </section>
      <section
        style={{ backgroundImage: `url(${Game})` }}
        className="h-[630px] bg-no-repeat bg-cover"
      >
        <div className="w-full flex flex-col py-[241px] justify-center items-center">
          <img src={Video} alt="" />
        </div>
      </section>
    </>
  );
};

export default index;
