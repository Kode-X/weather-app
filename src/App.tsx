// src/App.tsx

import BackgroundSection from "./components/sections/BackgroundSection";
import MainSection from "./components/sections/MainSection";
import { useAppStore } from "./components/store/store";

const App: React.FC = () => {
  const activeTab = useAppStore((state) => state.activeTab) ?? "stormy";
  return (
    <BackgroundSection weather={activeTab}>
      <MainSection />
    </BackgroundSection>
  );
};

export default App;
