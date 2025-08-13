import type { PropsWithChildren } from "react";

type HeroOrit = {
  size: number;
  rotation: number;
};

export default function HeroOrbit({
  children,
  size,
  rotation,
}: PropsWithChildren<HeroOrit>) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-30 animate-pulse"
      style={{
        transform: `rotate(${rotation}deg)`,
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      <div
        className="inline-flex"
        style={{ transform: `rotate(${rotation * -1}deg)` }}
      >
        {children}
      </div>
    </div>
  );
}
