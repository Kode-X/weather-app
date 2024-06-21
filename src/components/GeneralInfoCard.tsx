import { Text } from "@mantine/core";
import NavbarForCities from "./topSection/NavbarForCities";
import TempratureDates from "./topSection/TempratureDates";
import { capitalizeFirstLetter } from "../utils/getUtils";
import { tabs } from "../utils/getMockData";

interface GeneralInfoProps {
  activeTab: string;
  setCurrentSong: (songKey: string) => void;
}

const GeneralInfoCard: React.FC<GeneralInfoProps> = ({
  activeTab,
  setCurrentSong,
}) => {
  return (
    <div className="px-10">
      <NavbarForCities tabs={tabs} setCurrentSong={setCurrentSong} />
      <Text className="text-white text-2xl font-bold pb-10">
        {capitalizeFirstLetter(activeTab)}
      </Text>
      <TempratureDates />
    </div>
  );
};
export default GeneralInfoCard;
