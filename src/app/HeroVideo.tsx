"use client";

import { useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    const nextSoundEnabled = !soundEnabled;
    video.muted = !nextSoundEnabled;
    video.volume = 1;
    setSoundEnabled(nextSoundEnabled);

    if (nextSoundEnabled && video.paused) {
      try {
        await video.play();
      } catch {
        video.muted = true;
        setSoundEnabled(false);
      }
    }
  };

  return (
    <figure className="hero-shot">
      <video
        ref={videoRef}
        className="hero-video"
        src="/intro.mov"
        poster="/intro-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Nugumi intro video with sound"
      />
      <button
        type="button"
        className="hero-sound-toggle"
        onClick={toggleSound}
        aria-pressed={soundEnabled}
        aria-label={soundEnabled ? "Turn intro sound off" : "Turn intro sound on"}
      >
        <span aria-hidden="true">{soundEnabled ? "🔊" : "🔇"}</span>
        <span>{soundEnabled ? "Sound on" : "Turn sound on"}</span>
      </button>
    </figure>
  );
}
