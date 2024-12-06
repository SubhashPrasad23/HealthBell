import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-2 bg-[#16796F]", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-2 sm:space-x-2 sm:space-y-0",
        month: "space-y-2",
        caption:
          "flex justify-center pt-1 items-center bg-gradient-to-r from-[#16796F] to-[#1C9B8E] text-white font-bold rounded-lg shadow-md px-4 py-1",
        caption_label: "text-base font-semibold tracking-wide",
        nav: "space-x-2 flex items-center",
        nav_button:
          "p-1 border border-white bg-gradient-to-r from-[#16796F] to-[#1C9B8E] text-white rounded-full hover:shadow-md hover:opacity-90 transition",
        nav_button_previous: "absolute left-4",
        nav_button_next: "absolute right-4",
        table:
          "w-full border-collapse space-y-1 bg-[#F3F7F6] rounded-lg shadow-md",
        head_row: "flex bg-[#16796F] text-white rounded-t-lg",
        head_cell: "text-white font-semibold text-xs w-8 h-7", // Reduced size
        row: "flex w-full mt-1",
        cell: "relative p-1 text-center text-xs rounded-md hover:bg-[#E6F7F3] hover:text-[#16796F]",
        day: "h-7 w-6 font-medium text-[#333333] rounded-md hover:bg-[#54BAB9] hover:text-white transition", // Reduced size
        day_selected:
          "bg-[#FFD580] text-[#333333] font-bold shadow-md border border-[#FFA834]",
        day_today:
          "bg-[#54BAB9] text-white font-bold border-2 border-[#16796F] shadow-lg",
        day_outside: "text-[#B0C4C1] opacity-60",
        day_disabled: "text-[#B0C4C1] opacity-30",
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
