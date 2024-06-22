import { IconHeart } from "@tabler/icons-react";
import Activity from "./Activity";

interface Activity {
  img: string;
  distance: number;
}

const Activities = () => {
  const activities: Activity[] = [
    {
      img: "./images/act1.png",
      distance: 1,
    },
    {
      img: "./images/act2.png",
      distance: 2,
    },
    {
      img: "./images/act3.png",
      distance: 3,
    },
    {
      img: "./images/act4.png",
      distance: 4,
    },
  ];
  return (
    <div>
      <div className="flex actMainTitle">
        <IconHeart />
        <h2>Activities in your area</h2>
      </div>
      <div className="flex">
        {activities &&
          activities.map((activity) => (
            <Activity key={`act${activity.img}`} img={activity?.img} distance={activity?.distance} />
          ))}
      </div>
    </div>
  );
};

export default Activities;
