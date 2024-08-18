import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Frame1 from "../../assets/product-single/frame1.png";
import Frame2 from "../../assets/product-single/frame2.png";
import Frame3 from "../../assets/product-single/frame3.png";
import Frame4 from "../../assets/product-single/frame4.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="bg-[#0D2612] text-white pb-[100px]">
      <div className="container">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "#9593BF", color: "white" }}>
            <div className="pt-[90px]">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                  label="Item One"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "white",
                  }}
                  label="Item Two"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                  label="Item Three"
                  {...a11yProps(2)}
                />
              </Tabs>
            </div>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="flex justify-evenly">
              <div className="w-full max-w-[220px]">
                <img src={Frame1} alt="" />
                <div>
                  <h3 className="text-[18px] py-[24px]  font-[700]">
                    LOGITECH gaming headset
                  </h3>
                  <p className="text-[18px] font-[700]">699,99 €</p>
                </div>
              </div>
              <div className="w-full max-w-[220px]">
                <img src={Frame2} alt="" />
                <div>
                  <h3 className="text-[18px] py-[24px]  font-[700]">
                    CHAIR gaming MGCPROFBL GAMING
                  </h3>
                  <p className="text-[18px] font-[700]">149,90 €</p>
                </div>
              </div>
              <div className="w-full max-w-[220px]">
                <img src={Frame3} alt="" />
                <div>
                  <h3 className="text-[18px] py-[24px]  font-[700]">
                    Mando Microsoft Xbox Controller
                  </h3>
                  <p className="text-[18px] font-[700]">54,99 €</p>
                </div>
              </div>
              <div className="w-full max-w-[220px]">
                <img src={Frame4} alt="" />
                <div>
                  <h3 className="text-[18px]  py-[24px] font-[700]">
                    PC Gaming NEOMEDI05 NEOPC
                  </h3>
                  <p className="text-[18px] font-[700]">699,99 €</p>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="flex justify-evenly">
              <div className="w-full max-w-[220px]">
                <img src={Frame1} alt="" />
                <div>
                  <h3 className="text-[18px] py-[24px]  font-[700]">
                    LOGITECH gaming headset
                  </h3>
                  <p className="text-[18px] font-[700]">699,99 €</p>
                </div>
              </div>
              <div className="w-full max-w-[220px]">
                <img src={Frame2} alt="" />
                <div>
                  <h3 className="text-[18px] py-[24px]  font-[700]">
                    CHAIR gaming MGCPROFBL GAMING
                  </h3>
                  <p className="text-[18px] font-[700]">149,90 €</p>
                </div>
              </div>
              <div className="w-full max-w-[220px]">
                <img src={Frame3} alt="" />
                <div>
                  <h3 className="text-[18px] py-[24px]  font-[700]">
                    Mando Microsoft Xbox Controller
                  </h3>
                  <p className="text-[18px] font-[700]">54,99 €</p>
                </div>
              </div>
              <div className="w-full max-w-[220px]">
                <img src={Frame4} alt="" />
                <div>
                  <h3 className="text-[18px]  py-[24px] font-[700]">
                    PC Gaming NEOMEDI05 NEOPC
                  </h3>
                  <p className="text-[18px] font-[700]">699,99 €</p>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="flex justify-evenly">
              <div className="w-full max-w-[220px]">
                <img src={Frame1} alt="" />
                <div>
                  <h3 className="text-[18px] py-[24px]  font-[700]">
                    LOGITECH gaming headset
                  </h3>
                  <p className="text-[18px] font-[700]">699,99 €</p>
                </div>
              </div>
              <div className="w-full max-w-[220px]">
                <img src={Frame2} alt="" />
                <div>
                  <h3 className="text-[18px] py-[24px]  font-[700]">
                    CHAIR gaming MGCPROFBL GAMING
                  </h3>
                  <p className="text-[18px] font-[700]">149,90 €</p>
                </div>
              </div>
              <div className="w-full max-w-[220px]">
                <img src={Frame3} alt="" />
                <div>
                  <h3 className="text-[18px] py-[24px]  font-[700]">
                    Mando Microsoft Xbox Controller
                  </h3>
                  <p className="text-[18px] font-[700]">54,99 €</p>
                </div>
              </div>
              <div className="w-full max-w-[220px]">
                <img src={Frame4} alt="" />
                <div>
                  <h3 className="text-[18px]  py-[24px] font-[700]">
                    PC Gaming NEOMEDI05 NEOPC
                  </h3>
                  <p className="text-[18px] font-[700]">699,99 €</p>
                </div>
              </div>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </section>
  );
}
