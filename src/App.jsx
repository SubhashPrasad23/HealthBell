import { Outlet } from "react-router-dom";
import BottomTab from "./components/BottomTab";

function App() {
  return (
    <div className=" min-h-screen w-full flex  justify-center font-SourGummy">
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="shadow-inner shadow-green-700 tracking-wider w-full bg-green-600  lg:text-xl font-semibold text-white p-3 text-center">
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
