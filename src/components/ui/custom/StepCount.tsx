import { StepCountPropsType } from "@/types";
import { twMerge } from "tailwind-merge";

export const StepCount = ({ count, className }: StepCountPropsType) => {
  const finalClassName = twMerge(
    "rounded-full p-4 h-4 w-4 text-white flex justify-center bg-transparent items-center",
    className
  );

  return <div className={finalClassName}>{count}</div>;
};
