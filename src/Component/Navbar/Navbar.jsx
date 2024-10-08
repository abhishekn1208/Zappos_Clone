import React, { useState } from "react";
import "./Navbar.css";
import Women from "../Dropdown/Women/Women";
import New from "../Dropdown/New/New";
import Men from "../Dropdown/Men/Men";
import Kids from "../Dropdown/Kids/Kids";
import Collections from "../Dropdown/Collections/Collections";
import Brands from "../Dropdown/Brands/Brands";
import Sale from "../Dropdown/Sale/Sale";
import Gifts from "../Dropdown/Gifts/Gifts";

const Navbar = () => {
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isOpenWomen, setIsOpenWomen] = useState(false);
  const [isOpenMen, setIsOpenMen] = useState(false);
  const [isOpenKids, setIsOpenKids] = useState(false);
  const [isOpenCollections, setIsOpenCollections] = useState(false);
  const [isOpenBrands, setIsOpenBrands] = useState(false)
  const [isOpenSale, setIsOpenSale] = useState(false)
  const [isOpenGifts, setIsOpenGifts] = useState(false)

  const handleClickDropDownNew = () => {
    setIsOpenNew((prev) => !prev);
    setIsOpenWomen(false);
    setIsOpenMen(false)
    setIsOpenKids(false)
    setIsOpenCollections(false)
    setIsOpenBrands(false)
    setIsOpenSale(false)
    setIsOpenGifts(false)
  };

  const handleClickDropDownWomen = () => {
    setIsOpenWomen((prev) => !prev);
    setIsOpenNew(false);
    setIsOpenMen(false)
    setIsOpenKids(false)
    setIsOpenCollections(false)
    setIsOpenBrands(false)
    setIsOpenSale(false)
    setIsOpenGifts(false)
  };

  const handleClickDropDownMen = () =>{
    setIsOpenMen((prev)=>!prev)
    setIsOpenNew(false)
    setIsOpenWomen(false)
    setIsOpenKids(false)
    setIsOpenCollections(false)
    setIsOpenBrands(false)
    setIsOpenSale(false)
    setIsOpenGifts(false)
  }

  const handleClickDropDownKids=()=>{
    setIsOpenKids((prev)=>!prev)
    setIsOpenMen(false)
    setIsOpenNew(false)
    setIsOpenWomen(false)
    setIsOpenCollections(false)
    setIsOpenBrands(false)
    setIsOpenSale(false)
    setIsOpenGifts(false)
  }

  const handleClickDropDownCollections=()=>{
    setIsOpenCollections((prev)=>!prev)
    setIsOpenKids(false)
    setIsOpenMen(false)
    setIsOpenNew(false)
    setIsOpenWomen(false)
    setIsOpenBrands(false)
    setIsOpenSale(false)
    setIsOpenGifts(false)
  }

  const handleClickDropDownBrands=()=>{
    setIsOpenBrands((prev)=>!prev)
    setIsOpenCollections(false)
    setIsOpenKids(false)
    setIsOpenMen(false)
    setIsOpenNew(false)
    setIsOpenWomen(false)
    setIsOpenSale(false)
    setIsOpenGifts(false)
  }

  const handleClickDropDownSale=()=>{
    setIsOpenSale((prev)=>!prev)
    setIsOpenBrands(false)
    setIsOpenCollections(false)
    setIsOpenKids(false)
    setIsOpenMen(false)
    setIsOpenNew(false)
    setIsOpenWomen(false)
    setIsOpenGifts(false)
  }

  const handleClickDropDownGifts=()=>{
    setIsOpenGifts((prev)=>!prev)
    setIsOpenSale(false)
    setIsOpenBrands(false)
    setIsOpenCollections(false)
    setIsOpenKids(false)
    setIsOpenMen(false)
    setIsOpenNew(false)
    setIsOpenWomen(false)
  }

  return (
    <>
      <div id="nav-box">
        <nav>
          <ul>
            <li onClick={handleClickDropDownNew}>
              <a
                href="#"
                style={{
                  backgroundColor: isOpenNew ? "black" : "white",
                  color: isOpenNew ? "white" : "black",
                }}
              >
                New
              </a>
            </li>
            <li onClick={handleClickDropDownWomen}>
              <a
                href="#"
                style={{
                  backgroundColor: isOpenWomen ? "black" : "white",
                  color: isOpenWomen ? "white" : "black",
                }}
              >
                Women
              </a>{" "}
            </li>
            <li onClick={handleClickDropDownMen}>
              <a href="#"  style={{
                  backgroundColor: isOpenMen ? "black" : "white",
                  color: isOpenMen ? "white" : "black",
                }}>Men</a>{" "}
            </li>
            <li onClick={handleClickDropDownKids}>
              <a href="#"  style={{
                  backgroundColor: isOpenKids ? "black" : "white",
                  color: isOpenKids ? "white" : "black",
                }}>Kids</a>{" "}
            </li>
            <li onClick={handleClickDropDownCollections}>
              <a href="#" style={{
                  backgroundColor: isOpenCollections ? "black" : "white",
                  color: isOpenCollections ? "white" : "black",
                }}>Collections</a>{" "}
            </li>
            <li onClick={handleClickDropDownBrands}>
              <a href="#" style={{
                  backgroundColor: isOpenBrands ? "black" : "white",
                  color: isOpenBrands ? "white" : "black",
                }}>Brands</a>{" "}
            </li>
            <li onClick={handleClickDropDownSale}>
              <a href="#" style={{
                  backgroundColor: isOpenSale ? "black" : "white",
                  color: isOpenSale ? "white" : "black",
                }}>Sale</a>{" "}
            </li>
            <li onClick={handleClickDropDownGifts}>
              <a href="#"  style={{
                  backgroundColor: isOpenGifts ? "black" : "white",
                  color: isOpenGifts ? "white" : "black",
                }}>Gifts</a>
            </li>
          </ul>
        </nav>
        <div className="btn">
          <button>Help & Support</button>
        </div>
      </div>
      

      {isOpenNew && <New style={{ display: isOpenNew ? "block" : "none" }} setIsOpenNew={setIsOpenNew} />}
     
        {isOpenWomen && <Women style={{ display : isOpenWomen ? 'block' : 'none'}} setIsOpenWomen={setIsOpenWomen}/>}

      {isOpenMen && <Men style={{ display: isOpenMen ? "block" : "none" }} setIsOpenMen={setIsOpenMen}/>}
      {isOpenKids && <Kids style={{ display : isOpenKids ? 'block' : 'none'}} setIsOpenKids={setIsOpenKids}/>}
      {isOpenCollections && <Collections style={{ display : isOpenCollections ? 'block' : 'none'}} setIsOpenCollections={setIsOpenCollections}/>}
      {isOpenBrands && <Brands style={{ display : isOpenBrands ? 'block' : 'none'}} setIsOpenBrands={setIsOpenBrands}/>}
      {isOpenSale && <Sale style={{ display : isOpenSale ? 'block' : 'none'}} setIsOpenSale={setIsOpenSale}/>}
      {isOpenGifts && <Gifts style={{ display : isOpenSale ? 'block' : 'none'}} setIsOpenGifts={setIsOpenGifts}/>}
    </>
  );
};

export default Navbar;
