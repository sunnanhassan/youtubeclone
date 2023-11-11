import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextAPI";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";

const LeftNav = () => {
  return (
    <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x[-240] md:translate-x-0 transition-all"></div>
  );
};

export default LeftNav;
