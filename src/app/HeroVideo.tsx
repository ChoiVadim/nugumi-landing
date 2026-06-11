"use client";

import { useRef, useState } from "react";

function SpeakerIcon({ muted }: { muted: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.75 9.25H8.1L13.25 5.25V18.75L8.1 14.75H4.75V9.25Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {muted ? (
        <>
          <path
            d="M17 9.5L20.5 13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M20.5 9.5L17 13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <path
            d="M16.5 9C17.35 9.8 17.8 10.8 17.8 12C17.8 13.2 17.35 14.2 16.5 15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18.9 6.75C20.35 8.15 21.1 9.9 21.1 12C21.1 14.1 20.35 15.85 18.9 17.25"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 5.75V18.25L18.25 12L8.5 5.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;
    setSoundEnabled(true);

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      video.muted = true;
      setSoundEnabled(false);
      setIsPlaying(false);
    }
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    if (!video || video.paused) return;

    video.pause();
    setIsPlaying(false);
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextSoundEnabled = !soundEnabled;
    video.muted = !nextSoundEnabled;
    video.volume = 1;
    setSoundEnabled(nextSoundEnabled);
  };

  return (
    <figure className="hero-shot">
      <video
        ref={videoRef}
        className="hero-video"
        src="/intro.mov"
        poster="/intro-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Nugumi intro video with sound"
        onClick={pauseVideo}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <button
          type="button"
          className="hero-play-button"
          onClick={playWithSound}
          aria-label="Play intro video with sound"
        >
          <PlayIcon />
        </button>
      )}
      <button
        type="button"
        className="hero-sound-toggle"
        onClick={toggleSound}
        aria-pressed={soundEnabled}
        aria-label={soundEnabled ? "Turn intro sound off" : "Turn intro sound on"}
      >
        <SpeakerIcon muted={!soundEnabled} />
      </button>
    </figure>
  );
}
