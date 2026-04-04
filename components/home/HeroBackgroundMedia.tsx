'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { withBasePath } from '@/lib/site';

const FALLBACK_IMAGE = withBasePath('/assets/images/hero/hero-central-kitchen-main.jpg');
const VIDEO_SOURCE = withBasePath('/assets/videos/hero-background.mp4');

export default function HeroBackgroundMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        setIsReady(true);
      }
    };

    video.load();
    void tryPlay();
  }, []);

  return (
    <>
      <Image
        src={FALLBACK_IMAGE}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="hero-fallback-image"
      />

      <video
        ref={videoRef}
        className={`hero-background-video${isReady ? ' is-ready' : ''}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={FALLBACK_IMAGE}
        aria-hidden="true"
        onLoadedData={() => setIsReady(true)}
      >
        <source src={VIDEO_SOURCE} type="video/mp4" />
      </video>
    </>
  );
}
