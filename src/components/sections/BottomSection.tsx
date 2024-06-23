import { Group } from "@mantine/core";
import MyCard from "../MyCard";
import Activities from "../bottomSection/Activities";
import VerticalMenu from "../bottomSection/VerticalMenu";
import WeatherForecastChart from "../bottomSection/WeatherForecastChart";
import WeatherForecastDetails from "../bottomSection/WeatherForecastDetails";

const BottomSection: React.FC = () => (
  <div className="flex-1 flex flex-col justify-end">
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
      {/* First column */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-1  order-3 sm:order-1 hidden sm:block">
        <MyCard className="h-full">
          <VerticalMenu />
        </MyCard>
      </div>

      {/* Second column */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-4 order-2 sm:order-2">
        <MyCard className="hidden sm:block">
          <Activities />
        </MyCard>
        <MyCard className="mb-0">
          <WeatherForecastChart />
        </MyCard>
      </div>

      {/* Third column */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-2  order-1 sm:order-3">
        <MyCard className="h-full">
          <WeatherForecastDetails />
        </MyCard>
      </div>
    </div>
  </div>
);
export default BottomSection;
