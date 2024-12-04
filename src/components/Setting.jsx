import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Setting = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-3">
      <div className="h-28 w-28 bg-gray-200 rounded-full"></div>

      <div className="w-full grid grid-cols-2 gap-5">
        <Input type="text" placeholder="First name" />
        <Input type="text" placeholder="Last name" />
      </div>
      <div className="w-full  space-y-4">
        <Input type="number" placeholder="Mobile number" />
        <Input type="email" placeholder="Email" />
      </div>
      <Button
        className="w-full  tracking-wider shadow-inner shadow-green-700"
        variant="customGreen"
      >
        SAVE
      </Button>
    </div>
  );
};

export default Setting;
