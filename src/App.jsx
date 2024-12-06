import { Outlet } from "react-router-dom";
import BottomTab from "./components/BottomTab";

function App() {
  return (
    <div className=" w-full flex  justify-center font-SourGummy">
      <div className="w-full h-full">
        <div className="w-full  flex flex-col justify-between ">
          <div className="shadow-inner  shadow-[#1425243a] bg-[#16796F] tracking-wider w-full ]  lg:text-xl font-semibold text-white p-3 text-center">
            Add New Medicine
          </div>
          <Outlet />
          <BottomTab />
        </div>
      </div>
    </div>
  );
}

export default App;
