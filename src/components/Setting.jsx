import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Setting = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-3">
      <div className="h-28 w-28 bg-gray-200 rounded-full"></div>

      <div className="w-full grid grid-cols-2 gap-5">
        <Input
          type="text"
          placeholder="First name"
          className="w-full lg:p-3 px-3 py-2 border  outline-none focus:border-[#16796F] rounded-md"
        />

        <Input
          type="text"
          placeholder="Last name"
          className="w-full lg:p-3 px-3 py-2 border  outline-none focus:border-[#16796F] rounded-md"
        />
      </div>
      <div className="w-full  space-y-4">
        <Input
          type="number"
          placeholder="Mobile Number"
          className="w-full lg:p-3 px-3 py-2 border  outline-none focus:border-[#16796F] rounded-md"
        />
        <Input
          type="email"
          placeholder="Email"
          className="w-full lg:p-3 px-3 py-2 border  outline-none focus:border-[#16796F] rounded-md"
        />
      </div>
      <Button
        className="w-full  tracking-wider  shadow-inner shadow-[#1425243a] hover:bg-[#16796F] bg-[#1C9B8E]"
        variant="customGreen"
      >
        SAVE
      </Button>
    </div>
  );
};

export default Setting;
