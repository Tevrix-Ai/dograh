"use client";

import { Pause,Play } from "lucide-react";
import React, { useRef, useState } from "react";

import { Button } from "@/components/ui/button";

export function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const toggleSpeed = () => {
    const nextSpeed = speed === 1 ? 1.5 : speed === 1.5 ? 2 : 1;
    setSpeed(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <audio
        ref={audioRef}
        src={src}
        onEnded={handleEnded}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        preload="none"
      />
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={togglePlayPause}
        title={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="h-8 w-12 text-xs font-medium"
        onClick={toggleSpeed}
        title="Playback Speed"
      >
        {speed}x
      </Button>
    </div>
  );
}
