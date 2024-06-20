// src/App.tsx

import BackgroundSection from "./sections/BackgroundSection";
import MainSection from "./sections/MainSection";
import { useAppStore } from "./store/store";

const App: React.FC = () => {
  const activeTab = useAppStore((state) => state.activeTab) ?? "stormy";
  return (
    <BackgroundSection weather={activeTab}>
      {/* <MusicPlayer /> */}
      <MainSection />
    </BackgroundSection>
  );
};

export default App;
