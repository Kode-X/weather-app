import { Text } from "@mantine/core";
import { useState } from "react";
import MusicPlayer from "../MusicPlayer";
import MainWeatherIcon from "../topSection/MainWeatherIcon";
import NavbarForCities from "../topSection/NavbarForCities";
import TempratureDates from "../topSection/TempratureDates";
import { useAppStore } from "../store/store";
import { tabs } from "../utils/getMockData";
import { capitalizeFirstLetter } from "../utils/getUtils";

const TopSection: React.FC = () => {
  const activeTab = useAppStore((state) => state.activeTab);
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  return (
    <div className="flex-1 flex flex-col justify-start">
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <NavbarForCities tabs={tabs} setCurrentSong={setCurrentSong} />
        <div></div>
        <Text className="text-white text-2xl font-bold pb-10 order-1 text-center lg:text-left lg:flex-none lg:mr-auto">
          {capitalizeFirstLetter(activeTab !== null ? activeTab : "")}
        </Text>
        <div className="slg:text-right lg:flex-none lg:ml-auto order-2">
          <MainWeatherIcon />
        </div>

        <div className="order-3 text-center lg:text-left">
          <TempratureDates />
        </div>
      </div>
      <MusicPlayer currentSong={currentSong} />
    </div>
  );
};
export default TopSection;
