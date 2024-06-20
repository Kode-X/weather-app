import { useEffect, useRef, useState } from "react";
import { useAppStore } from "../store/store";
import { Button } from "@mantine/core";

const MusicPlayer: React.FC = () => {
  const activeSong = useAppStore((state) => state.activeSong);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const songUrls: { [key: string]: string } = {
    stormy: "/music/stormy.mp3",
    cloudy: "/music/cloudy.mp3",
    rainy: "/music/rainy.mp3",
    sunny: "/music/sunny.mp3",
  };

  useEffect(() => {
    console.log(activeSong);
    const audioPlayer = document.getElementById(
      "audioPlayer"
    ) as HTMLAudioElement | null;
    if (audioPlayer && activeSong !== null) {
      audioPlayer.src = songUrls[activeSong];
      console.log(audioPlayer.src);
      audioPlayer.play();
    }
  }, [activeSong]);

  const handleSongPause = () => {
    const audioPlayer = document.getElementById(
      "audioPlayer"
    ) as HTMLAudioElement | null;
    if (audioPlayer) {
      audioPlayer.pause();
    }
  };

  return (
    <>
      <audio id="audioPlayer">
        <source src="" type="audio/mpeg" />
      </audio>
      <Button onClick={handleSongPause}>Pause</Button>
    </>
  );
};

export default MusicPlayer;
