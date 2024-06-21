import { Text } from "@mantine/core";
import VerticalMenu from "../components/bottomSection/VerticalMenu";
import Activities from "../components/bottomSection/Activities";
import WeatherForecastChart from "../components/bottomSection/WeatherForecastChart";
import WeatherForecastDetails from "../components/bottomSection/WeatherForecastDetails";

const BottomSection: React.FC = () => (
  <div className="w-full h-full flex">
    <div className="w-1/8 h-full flex flex-col">
      <div className="h-full flex justify-center items-center">
        <VerticalMenu />
      </div>
    </div>
    <div className="w-1/2 h-full flex flex-col">
      <div className="h-1/2 flex justify-center items-center">
        <Activities />
      </div>
      <div className="h-1/2 flex justify-center items-center">
        <WeatherForecastChart />
      </div>
    </div>
    <div className="w-1/4 h-full flex flex-col">
      <div className="h-full  flex justify-center items-center">
        <WeatherForecastDetails />
      </div>
    </div>
  </div>
);
export default BottomSection;
