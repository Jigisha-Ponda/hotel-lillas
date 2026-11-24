"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { Monogram } from "./Logo";

/** next/image with a graceful, on-brand fallback if a photo is missing. */
export function Photo({ className = "", alt, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  if (failed) {
    return (
      <div className={`absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_30%_20%,#1a5240_0%,#0c2e23_55%,#071c15_100%)] ${className}`} role="img" aria-label={alt}>
        <Monogram className="h-16 w-16 opacity-40" />
      </div>
    );
  }
  return (
    <Image
      alt={alt}
      {...props}
      onError={() => setFailed(true)}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-[opacity,filter] duration-[1200ms] ease-luxe ${loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"}`}
    />
  );
}
