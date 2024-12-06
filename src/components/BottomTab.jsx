import { TbHomeFilled } from "react-icons/tb";
import { IoMdAddCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const BottomTab = () => {
  return (
    <div className="w-full text-[#16796F] shadow-inner shadow-gray-300 bg-gray-200 flex items-center justify-around p-2 fixed bottom-0 z-50 ">
      <NavLink to="/">
        <div className="flex flex-col items-center ">
          <TbHomeFilled size={25} color="#16796F" />
          <span className="text-xs ">Home</span>
        </div>
      </NavLink>
      <NavLink to="AddMedicine">
        <div>
          <div className=" border-4 border-[#16796F] rounded-full p-1 top-3">
            <IoMdAddCircle size={25} color="#16796F" />
          </div>
        </div>
      </NavLink>
      <NavLink to="/Setting">
        <div className="flex flex-col items-center">
          <IoSettings size={25} color="#16796F" />
          <span className="text-xs ">Settings</span>
        </div>
      </NavLink>
    </div>
  );
};

export default BottomTab;
