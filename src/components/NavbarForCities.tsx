import React, { useState } from "react";
import { Collapse, Text } from "@mantine/core";
import { useAppStore } from "../store/store";

interface NavbarProps {
  tabs: { label: string; value: string }[];
}

const NavbarForCities: React.FC<NavbarProps> = ({ tabs }) => {
  const setActiveTab = useAppStore((state) => state.setActiveTab);

  const [currentSong, setCurrentSong] = useState<string | null>(null);

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);

    handleSongPlay(tabValue);
  };

  const songUrls: { [key: string]: string } = {
    stormy: "/music/stormy.mp3",
    cloudy: "/music/cloudy.mp3",
    rainy: "/music/rainy.mp3",
    sunny: "/music/sunny.mp3",
  };

  const handleSongPlay = (songKey: string) => {
    setCurrentSong(songKey);
    const audioPlayer = document.getElementById(
      "audioPlayer"
    ) as HTMLAudioElement | null;
    if (audioPlayer) {
      audioPlayer.src = songUrls[songKey];
      console.log(audioPlayer.src);
      audioPlayer.play();
    }
  };

  const handleSongPause = () => {
    const audioPlayer = document.getElementById(
      "audioPlayer"
    ) as HTMLAudioElement | null;
    if (audioPlayer) {
      audioPlayer.pause();
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Collapse in={true}>
        {tabs.map((tab) => (
          <>
            <Text
              key={tab.value}
              component="button"
              onClick={() => handleTabClick(tab.value)}
              variant="link"
              size="lg"
              style={{ fontWeight: "bold" }}
            >
              {tab.label}
            </Text>
          </>
        ))}
      </Collapse>

      <audio id="audioPlayer">
        <source src="" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default NavbarForCities;
