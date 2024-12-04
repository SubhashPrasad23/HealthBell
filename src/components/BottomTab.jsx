import { TbHomeFilled } from "react-icons/tb";
import { IoMdAddCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const BottomTab = () => {
  return (
    <div className="w-full bg-gray-200 flex items-center justify-around p-2 fixed bottom-0 z-50">
      <NavLink to="/">
        <div className="flex flex-col items-center">
          <TbHomeFilled size={25} color="green" />
          <span className="text-xs ">Home</span>
        </div>
      </NavLink>
      <NavLink to="AddMedicine">
        <div>
          <div className=" border-4 border-green-700 rounded-full p-1 top-3">
            <IoMdAddCircle size={25} color="green" />
          </div>
        </div>
      </NavLink>
      <NavLink to="/Setting">
       
        <div className="flex flex-col items-center">
          <IoSettings size={25} color="green" />
          <span className="text-xs ">Settings</span>
        </div>
      </NavLink>
    </div>
  );
};

export default BottomTab;
