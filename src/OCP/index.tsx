import { Button } from "./Button";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

const OCP = () => {
  return (
    <div className="flex space-x-10">
      <Button
        text="Go Home"
        // role="forward"
        icon={<HiOutlineArrowNarrowRight />}
      />
      <Button
        text="Go Back"
        // role="back"
        icon={<HiOutlineArrowNarrowLeft />}
      />
    </div>
  );
};

export default OCP;
