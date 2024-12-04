import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";

const AddMedicine = () => {
  // const [value, setValue] = useState(null);

  return (
    <div className="w-full h-full pb-16">
      <div className="w-full p-3  space-y-10">
        <input
          type="text"
          placeholder="Name of Medicine"
          className="w-full lg:p-3 px-3 py-2 border border-gray-600"
        />
        <div className="space-y-2">
          <span>Choose Type of Medicine</span>
          <RadioGroup
            defaultValue="tablet"
            onValueChange={(value) => console.log("Selected:", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="tablet"
                id="r1"
                className="border-slate-900 dark:border-slate-400 border"
              />
              <Label htmlFor="r1">Tablet</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="capsule"
                id="r2"
                className="border-slate-900 dark:border-slate-400 border"
              />
              <Label htmlFor="r2">Capsule</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="Injection"
                id="r3"
                className="border-slate-900 dark:border-slate-400 border"
              />
              <Label htmlFor="r3">Injection</Label>
            </div>
          </RadioGroup>
        </div>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="How Many Times a Week?" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="twice">Twice</SelectItem>
              <SelectItem value="thrice">Thrice</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="space-y-2">
          <span>Select Daily Dosage Times :</span>
          <RadioGroup
            defaultValue="two"
            onValueChange={(value) => console.log("Selected:", value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="one"
                id="one"
                className="border-slate-900 dark:border-slate-400 border"
              />
              <Label htmlFor="one">One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="two"
                id="two"
                className="border-slate-900 dark:border-slate-400 border"
              />
              <Label htmlFor="two">Two</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="three"
                id="three"
                className="border-slate-900 dark:border-slate-400 border"
              />
              <Label htmlFor="three">Three</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="w-full grid md:grid-cols-3 gap-3">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Set time for first dose"
              defaultValue={dayjs("2022-04-17T15:30")}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Set time for second dose"
              defaultValue={dayjs("2022-04-17T15:30")}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Set time for third dose"
              defaultValue={dayjs("2022-04-17T15:30")}
            />
          </LocalizationProvider>
        </div>

        <fieldset>
          <legend>When to Take It?:</legend>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="Before Meal" name="Before Meal" />
            <label htmlFor="Before Meal">Before Meal</label>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="After Meal" name="After Meal" checked />
            <label htmlFor="After Meal">After Meal</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="Before Breakfast"
              name="Before Breakfast"
            />
            <label htmlFor="Before Breakfast">Before Breakfast</label>
          </div>
        </fieldset>

        <div className="w-full grid grid-cols-2 gap-3 ">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Start Date"
              defaultValue={dayjs("2022-04-17T15:30")}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="End Date"
              defaultValue={dayjs("2022-04-17T15:30")}
            />
          </LocalizationProvider>
        </div>

        <div className="2xl:pt-48 lg:pt-24 xs:pt-16 pt-12">
          <Button className="w-full  tracking-wider shadow-inner shadow-green-700" variant="customGreen">
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;
