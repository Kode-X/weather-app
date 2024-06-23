import { Button } from "@mantine/core";
import { useEffect } from "react";

interface MusicPlayerProps {
  currentSong: string | null;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ currentSong }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const songUrls: { [key: string]: string } = {
    stormy: "/music/stormy.mp3",
    cloudy: "/music/cloudy.mp3",
    rainy: "/music/rainy.mp3",
    sunny: "/music/sunny.mp3",
  };

  useEffect(() => {
    if (currentSong) {
      const audioPlayer = document.getElementById(
        "audioPlayer"
      ) as HTMLAudioElement | null;
      if (audioPlayer) {
        audioPlayer.src = songUrls[currentSong];
        audioPlayer.play();
      }
    }
  }, [currentSong, songUrls]);

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
