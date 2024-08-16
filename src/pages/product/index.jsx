// MUI ------
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// ANT design
import { Collapse } from "antd";
import { Checkbox } from "antd";
// import type { CheckboxProps } from "antd";

// ------------------
import { useState } from "react";
import Hero from "../../assets/hero.png";
import ProductCards from "../product-cards";
import Brands from "../../components/brands";
import "./index.scss";

const index = () => {
  // Select
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const { Panel } = Collapse;

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
            <div className=" w-full flex justify-between items-center">
              <p className="text-[24px] font-[400]">Filter by:</p>
              <div>
                <FormControl
                  sx={{ m: 1, minWidth: 120, outline: "none" }}
                  size="small"
                >
                  <InputLabel id="demo-select-small-label">Age</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-[100px] mt-[60px]">
          <div className="flex ">
            <div className="w-[300px]">
              <Collapse
                defaultActiveKey={["1"]}
                onChange={(key) => console.log(key)}
                bordered={false}
              >
                {/* <Panel
                  className="text-[18px] font-[400]"
                  header="BRAND"
                  key="1"
                >
                  <ul className="flex flex-col gap-20px text-[18px] font-[300]">
                    <li>
                      <Checkbox>Logitech</Checkbox>
                    </li>
                    <li>
                      <Checkbox>HyperX</Checkbox>
                    </li>
                    <li>
                      <Checkbox>Asus</Checkbox>
                    </li>
                    <li>
                      <Checkbox>Razer</Checkbox>
                    </li>
                    <li>
                      <Checkbox>NZXT</Checkbox>
                    </li>
                    <li>
                      <Checkbox>MSI</Checkbox>
                    </li>
                  </ul>
                </Panel> */}
                <div>
                  <Brands />
                </div>
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
              </Collapse>
              <Collapse
                defaultActiveKey={["1"]}
                onChange={(key) => console.log(key)}
                bordered={false}
              >
                <Panel
                  className="text-[18px] font-[400]"
                  header="SORT BY"
                  key="1"
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

            <div className=" w-full">
              <ProductCards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
