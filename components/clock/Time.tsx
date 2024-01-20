import classes from "./Time.module.css";
import { FiSunrise, FiSunset, FiSun } from "react-icons/fi";
import { WiMoonrise, WiMoonset } from "react-icons/wi";
import { LiaMoonSolid } from "react-icons/lia";
type Props = {
  time: Date;
};

const Time = ({ time }: Props) => {
  const timeHHMM_AM = time.toLocaleTimeString("en-UK", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const timeHHMM = timeHHMM_AM.substring(0, timeHHMM_AM.length - 2);
  const amOrPm = timeHHMM_AM.substring(timeHHMM_AM.length - 2);
  const hr = time.getHours();
  return (
    <span className="flex self-center font-cursive text-4xl w-full place-content-center ">
      {timeHHMM}
      {hr >= 0 && hr < 4 ? (
        <LiaMoonSolid className="ml-2 "/>
      ) : hr >= 4 && hr < 7 ? (
        <WiMoonset />
      ) : hr >= 7 && hr < 12 ? (
        <FiSunrise className="ml-2 " />
      ) : hr >= 12 && hr < 19 ? (
        <FiSun className="ml-2 "/>
      ) : hr >= 19 && hr < 20 ? (
        <FiSunset className="ml-2  " />
      ) : (
        <WiMoonrise />
      )}
    </span>
  );
};

export default Time;
