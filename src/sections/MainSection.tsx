import { Container, Grid } from "@mantine/core";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";

const MainSection: React.FC = () => (
    <div className="h-screen flex flex-col">
    <div className="h-1/2 flex">
      <TopSection />
    </div>
    <div className="h-1/2 flex">
      <BottomSection />
    </div>
  </div>
);

export default MainSection;
