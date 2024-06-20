import NavbarForCities from "../components/NavbarForCities";
import { useAppStore } from "../store/store";

const TopSection: React.FC = () => {
  const tabs = [
    { label: "Σάμος", value: "sunny" },
    { label: "Αλεξανδρούπολη", value: "rainy" },
    { label: "Θεσσαλονίκη", value: "cloudy" },
    { label: "Αθήνα", value: "stormy" },
  ];

  const activeTab = useAppStore((state) => state.activeTab);
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 p-4">
          <NavbarForCities tabs={tabs} />
        </div>
      </div>
    </div>
  );
};
export default TopSection;
