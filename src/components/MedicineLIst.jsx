import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MedicineLIst = () => {
  return (
    <div className="h-full w-full  ">
      <div className="p-3 text-white  space-y-2">
        <div className=" w-full bg-green-500 p-2 rounded-lg shadow-inner shadow-green-700">
          <div className="flex items-center justify-between ">
            <span className="font-semibold text-lg">Medicine name</span>
            <span className="flex items-center gap-5">
              <FaEdit size={23} />
              <MdDelete size={23} />
            </span>
          </div>
          <div>
            <span>Tablet</span> - <span>Daily</span>
          </div>
        </div>
        <div className=" w-full bg-green-500 p-2 rounded-lg shadow-inner shadow-green-700">
          <div className="flex items-center justify-between ">
            <span className="font-semibold text-lg">Medicine name</span>
            <span className="flex items-center gap-5">
              <FaEdit size={23} />
              <MdDelete size={23} />
            </span>
          </div>
          <div>
            <span>Tablet</span> - <span>Daily</span>{" "}
          </div>
        </div>

        </div>      
    </div>
  );
};

export default MedicineLIst;
