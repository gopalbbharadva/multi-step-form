import { Label } from "@radix-ui/react-label";
import Mobile from "../../../../public/images/bg-sidebar-mobile.svg";
import { StepCount } from "./StepCount";
import { Typography } from "./typography";
import { Input } from "../input";
import { Button } from "../button";

export const StepOne = () => {
  return (
    <>
      <Typography
        text="Personal info"
        variant="heading"
        className="text-marineBlue"
      />
      <Typography
        text="Please provide your name, email, address, and phone number"
        variant="subheading"
        className="text-coolGray p-0 m-0 text-start leading-6 font-normal"
      />

      <form className="w-full flex flex-col justify-between items-start gap-4 mt-2 h-full">
        <div className="w-full flex flex-col justify-between items-start gap-4">
          <div className="flex justify-start items-start flex-col w-full gap-1">
            <Label className="font-normal text-marineBlue" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="e.g. Stephen King"
              className="w-full border border-lightGray placeholder:font-bold"
            />
          </div>

          <div className="flex justify-start items-start flex-col w-full gap-1">
            <Label className="font-normal text-marineBlue" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              className="w-full border border-lightGray placeholder:font-bold"
            />
          </div>

          <div className="flex justify-start items-start flex-col w-full gap-1">
            <Label className="font-normal text-marineBlue" htmlFor="ph. no">
              Phone number
            </Label>
            <Input
              id="ph. no"
              placeholder="e.g. +1 234 567 890"
              className="w-full border border-lightGray placeholder:font-bold"
            />
          </div>
        </div>
        <Button className="bg-marineBlue text-white rounded-sm ml-auto self-start hidden md:block">
          Next Step
        </Button>
      </form>
    </>
  );
};
