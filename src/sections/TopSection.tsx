import { Text } from "@mantine/core";
import { useState } from "react";
import MusicPlayer from "../components/MusicPlayer";
import MainWeatherIcon from "../components/topSection/MainWeatherIcon";
import NavbarForCities from "../components/topSection/NavbarForCities";
import TempratureDates from "../components/topSection/TempratureDates";
import { useAppStore } from "../store/store";
import { tabs } from "../utils/getMockData";
import { capitalizeFirstLetter } from "../utils/getUtils";

const TopSection: React.FC = () => {
  const activeTab = useAppStore((state) => state.activeTab);
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  return (
    // <div className="flex-1 flex flex-col justify-end">
    //   <div className="container mx-auto p-4 grid grid-cols-1">
    //     {/* First column */}
    //     <div className="col-span-1 lg:col-span-2 justify-between">
    //       {/* GeneralInfoCard - Positioned on the far left */}

    //       {/* <div className="flex-none mr-auto">
    //         <GeneralInfoCard
    //           activeTab={activeTab !== null ? activeTab : ""}
    //           setCurrentSong={setCurrentSong}
    //         />
    //       </div> */}
    //       <div className="flex flex-col justify-center items-center lg:flex-row">
    //         <div className="text-center lg:text-left lg:flex-none lg:mr-auto order-1 sm:order-1">
    //           <Text className="text-white text-2xl font-bold pb-10 ">
    //             {capitalizeFirstLetter(activeTab !== null ? activeTab : "")}
    //           </Text>
    //           {/* <GeneralInfoCard
    //             activeTab={activeTab !== null ? activeTab : ""}
    //             setCurrentSong={setCurrentSong}
    //           /> */}
    //         </div>

    //         <div className="flex-auto"></div>

    //         {/* MainWeatherIcon - Positioned on the far right */}
    //         <div className="text-center lg:text-right lg:flex-none lg:ml-auto order-2 sm:order-3">
    //           <MainWeatherIcon />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <MusicPlayer currentSong={currentSong} />
    // </div>
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
