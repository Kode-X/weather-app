import { useState } from "react";
import GeneralInfoCard from "../components/GeneralInfoCard";
import MusicPlayer from "../components/MusicPlayer";
import MainWeatherIcon from "../components/topSection/MainWeatherIcon";
import { useAppStore } from "../store/store";

const TopSection: React.FC = () => {
  const activeTab = useAppStore((state) => state.activeTab);
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 p-4 flex flex-row w-full">
          <GeneralInfoCard
            activeTab={activeTab !== null ? activeTab : ""}
            setCurrentSong={setCurrentSong}
          />
          <div className="ml-auto p-20">
            <MainWeatherIcon />
          </div>
        </div>
        <MusicPlayer currentSong={currentSong} />
      </div>
    </div>
  );
};
export default TopSection;
