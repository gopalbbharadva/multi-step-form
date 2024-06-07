import "./App.css";
import { Typography } from "./components/ui/typography";

export default function Home() {
  return (
    <div>
      <Typography text="Personal info" variant="heading" className="text-marineBlue" />
      <Typography text="Please provide your name, email, address, and phone number" variant="subheading" className="text-coolGray" />
    </div>
  );
}
