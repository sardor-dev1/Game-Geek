import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// -------------------------------------------
import NavLogo from "../../assets/NavLogo.svg";
import Vector from "../../assets/Vector.svg";
import GameGeek from "../../assets/bottom-logo.svg";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <header className=" text-white">
        <nav className=" flex flex-col">
          <div className="bg-green-900 py-[20px]">
            <div className="container flex justify-between items-center">
              <div className="flex justify-between items-center gap-[30px]">
                <Link to={"/"}>
                  <img src={NavLogo} alt="" />
                </Link>
                <a href="#">
                  <img src={Vector} alt="" />
                </a>
                <a className="text-[14px] font-semibold" href="#">
                  +4904-049-950
                </a>
              </div>
              <div className="flex justify-between items-center gap-[30px]">
                <p>Get 50% Off on the Selected items </p>
                <p>Shop now</p>
              </div>
              <div>Languages</div>
            </div>
          </div>
          <div className="container  ">
            <div className="border-b-solid border-b-[2px] border-gray-300 flex py-[30px] text-black justify-between items-center">
              <a className="text-black" href="#">
                <img className="text-inherit" src={GameGeek} alt="" />
              </a>
              <ul
                style={{ color: "black" }}
                className="flex justify-between items-center gap-[40px] "
              >
                <li className="text-[16px] font-[500] hover:border-gray-400 border-b-solid border-b-[2px] border-white duration-150">
                  <a href="#">Categories</a>
                </li>
                <li className="text-[16px] font-[500] hover:border-gray-400 border-b-solid border-b-[2px] border-white duration-150">
                  <a href="#">Brands</a>
                </li>
                <li className="text-[16px] font-[500] hover:border-gray-400 border-b-solid border-b-[2px] border-white duration-150">
                  <a href="#">What’s new</a>
                </li>
                <li className="text-[16px] font-[500] hover:border-gray-400 border-b-solid border-b-[2px] border-white duration-150">
                  <a href="#">Sales</a>
                </li>
                <li className="text-[16px] font-[500] hover:border-gray-400 border-b-solid border-b-[2px] border-white duration-150">
                  <a href="#">Help</a>
                </li>
                <li className="text-[16px] font-[500] hover:border-gray-400 border-b-solid border-b-[2px] border-white duration-150">
                  <a href="#">About</a>
                </li>
              </ul>
              <div className="flex items-center gap-3">
                <button>
                  <SearchIcon />
                </button>
                <button>
                  <PersonOutlineIcon />
                </button>
                <button>
                  <AddShoppingCartIcon />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default index;
