import { Label } from "@radix-ui/react-label";
import Mobile from "../../../../public/images/bg-sidebar-mobile.svg";
import { StepCount } from "./StepCount";
import { Typography } from "./typography";
import { Input } from "../input";
import { Button } from "../button";

export const StepOne = () => {
  return (
    <div className="relative bg-magnolia h-screen">
      <img className="w-full" src={Mobile} />

      <div className="absolute top-10 flex justify-center items-center w-full gap-4">
        <StepCount count={1} className="bg-lightBlue text-marineBlue p-4" />
        <StepCount
          count={2}
          className="border border-alabaster text-alabaster p-4"
        />
        <StepCount
          count={3}
          className="border border-alabaster text-alabaster p-4"
        />
        <StepCount
          count={4}
          className="border border-alabaster text-alabaster p-4"
        />
      </div>

      <div
        className="bg-white rounded-lg flex justify-start items-start py-10 px-6 gap-2
        flex-col shadow-md absolute top-24 m-4"
      >
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

        <form className="w-full flex flex-col justify-start items-start gap-4 mt-2">
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
        </form>
      </div>
      <div className="bg-white mt-auto fixed bottom-0 w-full flex justify-end items-end p-4">
        <Button className="bg-marineBlue text-white rounded-sm">
          Next Step
        </Button>
      </div>
    </div>
  );
};
