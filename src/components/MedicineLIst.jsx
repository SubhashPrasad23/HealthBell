import useMediStore from "@/store/Store";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import emptyIcon from "../assets/empty.png";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
// import { FaRegSadCry } from "react-icons/fa"; // Example of an icon

const MedicineLIst = () => {
  const medicines = useMediStore((state) => state.medicines);
  const removeMedicine = useMediStore((state) => state.removeMedicine);
  const updateMedicine = useMediStore((state) => state.updateMedicine);

  const [editMode, setEditMode] = useState(false);
  const [editableMedicine, setEditableMedicine] = useState(null);

  console.log(medicines);
  const handleEditClick = (medicine) => {
    setEditableMedicine(medicine);
    setEditMode(true);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    updateMedicine(editableMedicine);
    setEditMode(false);
  };

  if (!medicines.length) {
    return (
      <div className=" w-full  h-80 flex flex-col items-center justify-center">
        <img src={emptyIcon} className="animate-pulse h-16 " />
        <p className="mt-2 text-gray-500">Your medicine list is empty.</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full  ">
      {editMode ? (
        <form onSubmit={handleUpdateSubmit} className="px-7 py-4 space-y-5">
          <input
            type="text"
            name="name"
            value={editableMedicine.name}
            onChange={(e) =>
              setEditableMedicine((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="w-full lg:p-3 px-3 py-2 border  outline-none focus:border-[#16796F] rounded-md"
          />

          <div className="space-y-2">
            <span>Choose Type of Medicine</span>
            <RadioGroup
              defaultValue={editableMedicine.type}
              onValueChange={(value) => {
                setEditableMedicine((prev) => ({ ...prev, type: value }));
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="tablet"
                  id="tablet"
                  className="border-slate-900 dark:border-slate-400 border"
                />
                <Label htmlFor="tablet">Tablet</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="capsule"
                  id="capsule"
                  className="border-slate-900 dark:border-slate-400 border"
                />
                <Label htmlFor="capsule">Capsule</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="injection"
                  id="injection"
                  className="border-slate-900 dark:border-slate-400 border"
                />
                <Label htmlFor="injection">Injection</Label>
              </div>
            </RadioGroup>
          </div>

          <Select
            defaultValue={editableMedicine.timesInWeek}
            onValueChange={(value) => {
              setEditableMedicine((prev) => ({ ...prev, timesInWeek: value }));
            }}
          >
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
              defaultValue={editableMedicine.dailyDosage}
              onValueChange={(value) =>
                setEditableMedicine((prev) => ({ ...prev, dailyDosage: value }))
              }
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
                value={dayjs(editableMedicine.timeForFirstDose)}
                onChange={(newValue) => {
                  setEditableMedicine((prev) => ({
                    ...prev,
                    timeForFirstDose: newValue,
                  }));
                }}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Set time for second dose"
                // defaultValue={dayjs("2022-04-17T15:30")}
                name="timeForSecondDose"
                value={dayjs(editableMedicine.timeForSecondDose)}
                onChange={(newValue) => {
                  setEditableMedicine((prev) => ({
                    ...prev,
                    timeForSecondDose: newValue,
                  }));
                }}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Set time for third dose"
                name=" timeForThirdDose"
                value={dayjs(editableMedicine.timeForThirdDose)}
                onChange={(newValue) => {
                  setEditableMedicine((prev) => ({
                    ...prev,
                    timeForThirdDose: newValue,
                  }));
                }}
              />
            </LocalizationProvider>
          </div>

          <fieldset>
            <legend>When to Take It?:</legend>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="Before Meal"
                checked={editableMedicine.beforeMeal}
                onChange={() =>
                  setEditableMedicine((prev) => ({
                    ...prev,
                    beforeMeal: !prev.beforeMeal,
                  }))
                }
              />
              <label htmlFor="Before Meal">Before Meal</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="After Meal"
                checked={editableMedicine.afterMeal}
                onChange={() =>
                  setEditableMedicine((prev) => ({
                    ...prev,
                    afterMeal: !prev.afterMeal,
                  }))
                }
              />
              <label htmlFor="After Meal">After Meal</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="Before Breakfast"
                checked={editableMedicine.beforeBreakFast}
                onChange={() =>
                  setEditableMedicine((prev) => ({
                    ...prev,
                    beforeBreakFast: !prev.beforeBreakFast,
                  }))
                }
              />
              <label htmlFor="Before Breakfast">Before Breakfast</label>
            </div>
          </fieldset>

          <Button
            type="submit"
            className="w-full  tracking-wider  shadow-inner shadow-[#1425243a] hover:bg-[#16796F] bg-[#1C9B8E]"
            variant="customGreen"
          >
            UPDATE
          </Button>

          
        </form>
      ) : (
        <div className="p-3 text-white  space-y-2">
          {medicines.map((details, i) => (
            <div key={i}>
              <div className=" w-full  p-2 rounded-lg bg-[#1C9B8E] shadow-[#578E87">
                <div className="flex items-center justify-between ">
                  <span className="font-semibold text-lg">
                    {details.name.charAt(0).toUpperCase() +
                      details.name.slice(1)}
                  </span>
                  <div className="flex items-center gap-5">
                    <span onClick={() => handleEditClick(details)}>
                      <FaEdit size={23} />
                    </span>
                    <span onClick={() => removeMedicine(details.id)}>
                      <MdDelete size={23} />
                    </span>
                  </div>
                </div>
                <div>
                  <span>
                    {details.type.charAt(0).toUpperCase() +
                      details.type.slice(1)}
                  </span>
                  - <span>{details.timesInWeek}</span>
                </div>
                <div className="space-x-5">
                  {details.beforeMeal && <span>Before Meal </span>}
                  {details.afterMeal && <span> After Meal</span>}
                  {details.beforeBreakFast && <span>Before Breakfast</span>}
                </div>
              </div>
            </div>
          ))}

          {/* <div className=" w-full bg-green-500 p-2 rounded-lg shadow-inner shadow-green-700">
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
        </div> */}
        </div>
      )}
    </div>
  );
};

export default MedicineLIst;
