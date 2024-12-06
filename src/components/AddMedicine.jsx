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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import useMediStore from "@/store/Store";

const AddMedicine = () => {
  const [isOpenstartDate, setIsOpenstartDate] = useState(false);
  const [isOpenendDate, setIsOpenendDate] = useState(false);

  const [medicinesInfo, setMedicinesInfo] = useState({
    name: "",
    type: "",
    timesInWeek: "",
    dailyDosage: "",
    timeForFirstDose: null,
    timeForSecondDose: null,
    timeForThirdDose: null,
    beforeMeal: false,
    afterMeal: true,
    beforeBreakFast: false,
    startDate: null,
    endDate: null,
  });

  const AddMedicine = useMediStore((state) => state.AddMedicine);

  const MedicineInfoHandler = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setMedicinesInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMedicineSubmit = (e) => {
    e.preventDefault();
    if (!medicinesInfo) {
      alert("add medicine");
    }
    AddMedicine({
      id: Math.ceil(Math.random() * 100000),
      name: medicinesInfo.name,
      type: medicinesInfo.type,
      timesInWeek: medicinesInfo.timesInWeek,
      dailyDosage: medicinesInfo.dailyDosage,
      timeForFirstDose: medicinesInfo.timeForFirstDose,
      timeForSecondDose: medicinesInfo.timeForSecondDose,
      timeForThirdDose: medicinesInfo.timeForThirdDose,
      beforeMeal: medicinesInfo.beforeMeal,
      afterMeal: medicinesInfo.afterMeal,
      beforeBreakFast: medicinesInfo.beforeBreakFast,
      startDate: medicinesInfo.startDate,
      endDate: medicinesInfo.endDate,
    });

    setMedicinesInfo({
      name: "",
      type: "",
      timesInWeek: "",
      dailyDosage: "",
      timeForFirstDose: null,
      timeForSecondDose: null,
      timeForThirdDose: null,
      beforeMeal: false,
      afterMeal: true,
      beforeBreakFast: false,
      startDate: null,
      endDate: null,
    });

    console.log("clicked");
  };

  return (
    <div className="w-full  overflow-auto px-7 py-4 ">
      <form onSubmit={handleMedicineSubmit}>
        <div className="w-full   space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name of Medicine"
            value={medicinesInfo.name}
            onChange={MedicineInfoHandler}
            className="w-full lg:p-3 px-3 py-2 border  outline-none focus:border-[#16796F] rounded-md"
          />
          <div className="space-y-2">
            <span>Choose Type of Medicine</span>
            <RadioGroup
              defaultValue={medicinesInfo.type}
              onValueChange={(value) => {
                setMedicinesInfo((prev) => ({ ...prev, type: value }));
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
            defaultValue={medicinesInfo.WhenToTake}
            onValueChange={(value) => {
              setMedicinesInfo((prev) => ({ ...prev, timesInWeek: value }));
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
              defaultValue={medicinesInfo.dailyDosage}
              onValueChange={(value) =>
                setMedicinesInfo((prev) => ({ ...prev, dailyDosage: value }))
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
                value={
                  medicinesInfo.timeForFirstDose
                    ? dayjs(medicinesInfo.timeForFirstDose)
                    : null
                }
                onChange={(newValue) => {
                  setMedicinesInfo((prev) => ({
                    ...prev,
                    timeForFirstDose: dayjs(newValue),
                  }));
                }}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Set time for second dose"
                // defaultValue={dayjs("2022-04-17T15:30")}
                name="timeForSecondDose"
                value={
                  medicinesInfo.timeForSecondDose
                    ? dayjs(medicinesInfo.timeForSecondDose)
                    : null
                }
                onChange={(newValue) => {
                  setMedicinesInfo((prev) => ({
                    ...prev,
                    timeForSecondDose: dayjs(newValue),
                  }));
                }}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Set time for third dose"
                name=" timeForThirdDose"
                value={
                  medicinesInfo.timeForThirdDose
                    ? dayjs(medicinesInfo.timeForThirdDose)
                    : null
                }
                onChange={(newValue) => {
                  setMedicinesInfo((prev) => ({
                    ...prev,
                    timeForThirdDose: dayjs(newValue),
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
                checked={medicinesInfo.beforeMeal}
                onChange={() =>
                  setMedicinesInfo((prev) => ({
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
                checked={medicinesInfo.afterMeal}
                onChange={() =>
                  setMedicinesInfo((prev) => ({
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
                checked={medicinesInfo.beforeBreakFast}
                onChange={() =>
                  setMedicinesInfo((prev) => ({
                    ...prev,
                    beforeBreakFast: !prev.beforeBreakFast,
                  }))
                }
              />
              <label htmlFor="Before Breakfast">Before Breakfast</label>
            </div>
          </fieldset>

          <div className="w-full grid grid-cols-2 gap-3 ">
            <Popover open={isOpenstartDate} onOpenChange={setIsOpenstartDate}>
              <PopoverTrigger asChild>
                <Button
                  className={cn(
                    " justify-start text-left font-normal ",
                    !medicinesInfo.startDate && "text-white"
                  )}
                >
                  <CalendarIcon />
                  {medicinesInfo.startDate ? (
                    format(medicinesInfo.startDate, "dd/MM/yyyy")
                  ) : (
                    <span>Start date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={medicinesInfo.startDate}
                  onSelect={(newValue) => {
                    setMedicinesInfo((prev) => ({
                      ...prev,
                      startDate: newValue,
                    }));
                    setIsOpenstartDate(false);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Popover open={isOpenendDate} onOpenChange={setIsOpenendDate}>
              <PopoverTrigger asChild>
                <Button
                  className={cn(
                    "   font-normal",
                    !medicinesInfo.endDate && "text-white"
                  )}
                >
                  <CalendarIcon />
                  {medicinesInfo.endDate ? (
                    format(medicinesInfo.endDate, "dd/MM/yyyy")
                  ) : (
                    <span>End date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={medicinesInfo.endDate}
                  onSelect={(newValue) => {
                    setMedicinesInfo((prev) => ({
                      ...prev,
                      endDate: newValue,
                    }));
                    setIsOpenendDate(false);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="">
            <Button
              type="submit"
              className="w-full  tracking-wider shadow-inner shadow-[#1425243a] hover:bg-[#16796F] bg-[#1C9B8E]"
              variant="customGreen"
            >
              ADD
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMedicine;
