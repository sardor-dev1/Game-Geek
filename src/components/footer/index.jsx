import "./style.scss";
import FooterLogo from "../../assets/footer-logo.svg";
import NavLogo from "../../assets/NavLogo.svg"
import Twitter from "../../assets/twitter.svg"
import Help from "../../assets/help.svg"
import In from "../../assets/in.svg"
import Facebook from "../../assets/facebook.svg"
import { Link } from "react-router-dom";
import Instagram from "../../assets/insta.svg"

const index = () => {
  return (
    <>
      <footer className="bg-[#0D2612] text-white">
        <div className="container">
          <div className="pt-[70px] pb-[90px] flex justify-between border-b-solid border-b-[2px] border-white">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-[15px]">
                <Link>
                  <img src={FooterLogo} alt="footer logo" />
                </Link>
                <div className="flex flex-col">
                  <p className="text-[14px] font-[400] ">
                    START YOUR <span className="text-green-300">GAME </span>
                  </p>
                  <p className="text-[14px] font-[400] ">
                    WITH THE <span className="text-green-300">BEST</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[20px]">
                <a href="#">
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a href="#">
                  <img src={In} alt="In" />
                </a>
                <a href="#">
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={Instagram} alt="Instagram" />
                </a>
              </div>
            </div>
            <div className="flex items-start gap-[125px]">
              <ul>
                <h3 className="text-[24px] font-[700]">Services</h3>
                <li>
                  <a href="#">Gift Card</a>
                </li>
                <li>
                  <a href="#">Mobile App</a>
                </li>
                <li>
                  <a href="#">Shipping & Delivery</a>
                </li>
                <li>
                  <a href="#">Order Pickup</a>
                </li>
                <li>
                  <a href="#">Account Signup</a>
                </li>
              </ul>
              <ul>
                <h3 className="text-[24px] font-[700]">Help</h3>
                <li>
                  <a href="#">ShopCart Help</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Track Orders</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">Security & Fraud</a>
                </li>
              </ul>
              <ul>
                <h3 className="text-[24px] font-[700]">About Us</h3>
                <li>
                  <a href="#">News & Blog</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Press Center</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex py-[35px] justify-between items-center">
            <img src={NavLogo} alt="" />
            <div className="flex items-center gap-3">
              <img src={Help} alt="" /> <p>Help Center</p>
            </div>
            <p>Privacy & Policy</p>
            <p>Terms of Service</p>
            <p>All rights reserved by GameGeek | 2023</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
