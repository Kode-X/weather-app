import BottomSection from "./BottomSection";
import TopSection from "./TopSection";

const MainSection: React.FC = () => (
  <div className="h-screen flex flex-col justify-between">
    <TopSection />
    <BottomSection />
  </div>
);

export default MainSection;
