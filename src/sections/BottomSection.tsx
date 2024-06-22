import { Group } from "@mantine/core";
import Card from "../components/Card";
import Activities from "../components/bottomSection/Activities";
import VerticalMenu from "../components/bottomSection/VerticalMenu";
import WeatherForecastChart from "../components/bottomSection/WeatherForecastChart";
import WeatherForecastDetails from "../components/bottomSection/WeatherForecastDetails";

const BottomSection: React.FC = () => (
  <div className="flex-1 flex flex-col justify-end">
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
      {/* First column */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-1  order-3 sm:order-1 hidden sm:block">
        <Card className="h-full">
          <VerticalMenu />
        </Card>
      </div>

      {/* Second column */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-4 order-2 sm:order-2">
        <Card className="hidden sm:block">
          <Activities />
        </Card>
        <Card className="mb-0">
          <WeatherForecastChart />
        </Card>
      </div>

      {/* Third column */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-2  order-1 sm:order-3">
        <Card className="h-full">
          <WeatherForecastDetails />
        </Card>
      </div>
    </div>
  </div>
);
export default BottomSection;
